'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const pkg = require('../package.json');

const {join} = path;
const {env} = process;
const {default: defaultConfig} = pkg.configuration;

class Config {
  constructor() {
    let config_home = join(env.XDG_CONFIG_HOME || join(os.homedir(), '.config'));
    this._configFile = join(join(config_home, 'taskbook'), 'taskbook.json')
    this._ensureConfigFile();
  }

  _ensureConfigFile() {
    if (fs.existsSync(this._configFile)) {
      return;
    }

    const data = JSON.stringify(defaultConfig, null, 4);
    fs.writeFileSync(this._configFile, data, 'utf8');
  }

  _formatTaskbookDir(path) {
    return join(os.homedir(), path.replace(/^~/g, ''));
  }

  get() {
    let config = {};

    const content = fs.readFileSync(this._configFile, 'utf8');
    config = JSON.parse(content);

    if (config.taskbookDirectory.startsWith('~')) {
      config.taskbookDirectory = this._formatTaskbookDir(config.taskbookDirectory);
    }

    return Object.assign({}, defaultConfig, config);
  }
}

module.exports = new Config();
