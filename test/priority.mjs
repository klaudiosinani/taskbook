import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import {fileURLToPath} from 'node:url';

const cli = fileURLToPath(new URL('../cli.js', import.meta.url));
const fixture = {
  1: {
    _id: 1, _isTask: true, description: 'First task', priority: '1', boards: ['My Board'],
    isComplete: false, inProgress: false, isStarred: true,
  },
  2: {
    _id: 2, _isTask: true, description: 'Second task', priority: '2', boards: ['@work'],
    isComplete: false, inProgress: true, isStarred: false,
  },
  3: {
    _id: 3, _isTask: false, description: 'A note', boards: ['My Board'],
  },
  4: {
    _id: 4, _isTask: true, description: 'Unrelated task', priority: '3', boards: ['My Board'],
    isComplete: true, inProgress: false, isStarred: true,
  },
};
let failures = 0;
let cases = 0;

function runCase(name, input, {
  ids = [], level, expectedError, data = fixture, flag = '-p', before = [], display = false,
} = {}) {
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'taskbook-priority-'));

  try {
    const storageDirectory = path.join(home, '.taskbook', 'storage');
    fs.mkdirSync(storageDirectory, {recursive: true});
    const storageFile = path.join(storageDirectory, 'storage.json');
    fs.writeFileSync(storageFile, JSON.stringify(data));
    const archiveDirectory = path.join(home, '.taskbook', 'archive');
    fs.mkdirSync(archiveDirectory);
    const archiveFile = path.join(archiveDirectory, 'archive.json');
    const archive = JSON.stringify({1: fixture[4]});
    fs.writeFileSync(archiveFile, archive);
    const configFile = path.join(home, '.taskbook.json');
    const config = JSON.stringify({
      taskbookDirectory: home, displayCompleteTasks: true, displayProgressOverview: true,
    });
    fs.writeFileSync(configFile, config);

    function execute(arguments_) {
      const result = spawnSync(process.execPath, [cli, '--taskbook-dir', home, ...arguments_], {
        encoding: 'utf8',
        env: {
          ...process.env,
          HOME: home,
          USERPROFILE: home,
          XDG_CONFIG_HOME: home,
          XDG_CACHE_HOME: home,
          TASKBOOK_DIR: '',
          CI: 'true',
          FORCE_COLOR: '0',
        },
        timeout: 10_000,
      });

      assert.ifError(result.error);
      return result;
    }

    for (const command of before) {
      const result = execute(command);
      assert.equal(result.status, 0, result.stdout + result.stderr);
    }

    const serializedFixture = fs.readFileSync(storageFile, 'utf8');
    const result = execute([flag, ...input]);
    const output = result.stdout + result.stderr;
    const content = fs.readFileSync(storageFile, 'utf8');
    const successes = output.split('Updated priority of task: ').slice(1).map(message => message.split(' ', 1)[0]);

    if (expectedError) {
      assert.equal(result.status, 1, output);
      assert.ok(output.includes(expectedError), output);
      assert.equal(content, serializedFixture);
      assert.deepEqual(successes, []);
    } else {
      assert.equal(result.status, 0, output);
      const expected = JSON.parse(serializedFixture);
      for (const id of ids) {
        expected[id].priority = level;
      }

      assert.deepEqual(JSON.parse(content), expected);
      assert.deepEqual(successes, ids);
      const label = {1: 'normal', 2: 'medium', 3: 'high'}[level];
      for (const id of ids) {
        assert.ok(output.includes(`Updated priority of task: ${id} to ${label}`), output);
      }

      if (display) {
        const displayed = execute([]);
        assert.equal(displayed.status, 0, displayed.stdout + displayed.stderr);
        for (const item of Object.values(expected)) {
          assert.ok(displayed.stdout.includes(item.description), displayed.stdout);
        }

        assert.equal(fs.readFileSync(storageFile, 'utf8'), content);
      }
    }

    assert.equal(fs.readFileSync(archiveFile, 'utf8'), archive);
    assert.equal(fs.readFileSync(configFile, 'utf8'), config);
    assert.deepEqual(fs.readdirSync(path.join(home, '.taskbook', '.temp')), []);
    console.log(`PASS ${name}`);
  } catch (error) {
    failures++;
    console.error(`FAIL ${name}`);
    console.error(error);
  } finally {
    cases++;
    fs.rmSync(home, {recursive: true, force: true});
  }
}

runCase('single target before priority', ['@1', '2'], {ids: ['1'], level: '2'});
runCase('single target after priority', ['3', '@1'], {ids: ['1'], level: '3'});
runCase('single note remains supported', ['@3', '2'], {ids: ['3'], level: '2'});

for (const level of ['1', '2', '3']) {
  runCase(`batch priority ${level}`, [level, '@1', '@2'], {ids: ['1', '2'], level});
}

runCase('priority after targets', ['@1', '@2', '3'], {ids: ['1', '2'], level: '3'});
runCase('priority between targets', ['@1', '3', '@2'], {ids: ['1', '2'], level: '3'});
runCase('duplicate targets update once', ['@1', '2', '@1', '@2'], {ids: ['1', '2'], level: '2'});
runCase('batch containing a note', ['2', '@1', '@3'], {ids: ['1', '3'], level: '2'});
runCase('missing targets', ['2'], {expectedError: 'No id was given as input'});
runCase('missing priority', ['@1'], {expectedError: 'Priority can only be 1, 2 or 3'});
runCase('invalid priority', ['@1', '4'], {expectedError: 'Priority can only be 1, 2 or 3'});
runCase('unknown target', ['@99', '2'], {expectedError: 'Unable to find item with id: 99'});
runCase('invalid target after valid target leaves storage unchanged', ['2', '@1', '@99'], {
  expectedError: 'Unable to find item with id: 99',
});
runCase('nonnumeric target leaves storage unchanged', ['2', '@1', '@invalid'], {
  expectedError: 'Unable to find item with id: invalid',
});

for (const from of ['1', '2', '3']) {
  for (const to of ['1', '2', '3']) {
    const data = structuredClone(fixture);
    data[1].priority = from;
    data[2].priority = from;
    runCase(`transition ${from} to ${to}`, [to, '@1', '@2'], {ids: ['1', '2'], level: to, data});
  }
}

runCase('pending, in-progress, completed and starred states preserved', ['2', '@1', '@2', '@4'], {
  ids: ['1', '2', '4'], level: '2',
});
runCase('reversed target order preserved in success output', ['1', '@4', '@2', '@1'], {
  ids: ['4', '2', '1'], level: '1',
});
runCase('all targets repeated', ['3', '@2', '@1', '@2', '@1'], {ids: ['2', '1'], level: '3'});
runCase('long priority flag', ['3', '@1', '@2'], {ids: ['1', '2'], level: '3', flag: '--priority'});
runCase('empty argument list', [], {expectedError: 'Priority can only be 1, 2 or 3'});
runCase('empty storage', ['2', '@1'], {data: {}, expectedError: 'Unable to find item with id: 1'});

for (const target of ['@99', '@invalid', '@', '@-1', '@1.5', '@1,2', '@1x']) {
  for (const position of [0, 1, 2]) {
    const targets = ['@1', '@2'];
    targets.splice(position, 0, target);
    runCase(`invalid ${target} at position ${position + 1}`, ['2', ...targets], {
      expectedError: `Unable to find item with id: ${target.slice(1)}`.trimEnd(),
    });
  }
}

runCase('duplicates with invalid target leave storage unchanged', ['2', '@1', '@1', '@99'], {
  expectedError: 'Unable to find item with id: 99',
});

for (const flag of ['-e', '-m']) {
  runCase(`${flag} still rejects multiple targets`, ['@1', '@2', 'replacement'], {
    flag, expectedError: 'More than one ids were given as input',
  });
}

const largeData = {};
const largeIDs = [];
for (let id = 1; id <= 250; id++) {
  largeData[id] = {...fixture[1], _id: id};
  largeIDs.push(String(id));
}

runCase('250-target batch', ['3', ...largeIDs.map(id => `@${id}`)], {
  ids: largeIDs, level: '3', data: largeData,
});
runCase('create, update and display using separate CLI processes', ['3', '@1', '@2'], {
  ids: ['1', '2'],
  level: '3',
  data: {},
  before: [
    ['-t', '@work', 'First workflow task'],
    ['-t', '@home', 'Second workflow task'],
    ['-p', '2', '@1', '@2'],
  ],
  display: true,
});

console.log(`${cases - failures}/${cases} priority cases passed`);
process.exitCode = failures === 0 ? 0 : 1;
