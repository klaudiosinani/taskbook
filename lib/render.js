'use strict';
const chalk = require('chalk');
const signale = require('signale');
const Config = require('./config');

const {pending, success, note, log, error} = signale;
const {blue, green, grey, magenta, underline, red, yellow} = chalk;

const priorities = {2: 'yellow', 3: 'red'};

class Render {
  constructor() {
    this._config = new Config();
  }

  get _configuration() {
    return this._config.get();
  }

  _getTaskStats(items) {
    const tasks = items.filter(item => item._isTask);
    const complete = tasks.filter(task => task.isComplete);
    return [tasks, complete].map(x => x.length);
  }

  _isLabelComplete(items) {
    const [tasks, complete] = this._getTaskStats(items);
    return tasks === complete;
  }

  _filterLabels(description, labels) {
    const filtered = description.split(' ').filter(x => {
      return !labels.includes(x) && !x.match(/p:[1-3]/g);
    });

    return filtered.join(' ');
  }

  _colorLabels(labels) {
    return labels.map(x => grey(x)).join(' ');
  }

  _getAge(birthday) {
    const daytime = 24 * 60 * 60 * 1000;
    const age = Math.round(Math.abs((birthday - new Date().getTime()) / daytime));
    return (age === 0) ? '' : grey(`${age}d`);
  }

  _getStar(item) {
    return item.isStarred ? yellow('★') : '';
  }

  _getCorrelation(items) {
    const [tasks, complete] = this._getTaskStats(items);
    return grey(`[${complete}/${tasks}]`);
  }

  _buildTitle(key, items) {
    const title = (key === new Date().toDateString()) ? `${underline(key)} ${grey('[Today]')}` : underline(key);
    const correlation = this._getCorrelation(items);
    return Object.assign({}, {title, correlation});
  }

  _buildPrefix(item) {
    const prefix = [];

    const {_id} = item;
    prefix.push(' '.repeat(4 - String(_id).length));
    prefix.push(grey(`${_id}.`));

    return prefix.join(' ');
  }

  _buildMessage(item) {
    const message = [];

    const {isComplete, description, labels} = item;
    const priority = parseInt(item.priority, 10);

    if (!isComplete && priority > 1) {
      message.push(priority === 2 ? yellow('!!') : red('⚠ '));
    }

    const desc = this._filterLabels(description, labels);

    if (!isComplete && priority > 1) {
      message.push(underline[priorities[priority]](desc));
    } else {
      message.push(desc);
    }

    return message.join(' ');
  }

  _displayTitle(label, items) {
    const {title: message, correlation: suffix} = this._buildTitle(label, items);
    const titleObj = Object.assign({}, {prefix: '\n ', message, suffix});

    return log(titleObj);
  }

  _displayItemByLabel(item, padding = '') {
    const {_isTask, isComplete} = item;
    const age = this._getAge(item._timestamp);

    const prefix = this._buildPrefix(item, padding);
    const message = this._buildMessage(item);
    const suffix = (age.length === 0) ? `${this._getStar(item)}` : `${age} ${this._getStar(item)}`;

    const msgObj = Object.assign({}, {prefix, message, suffix});

    if (_isTask) {
      return isComplete ? success(msgObj) : pending(msgObj);
    }

    return note(msgObj);
  }

  _displayItemByDate(item) {
    const {_isTask, isComplete} = item;
    const labels = item.labels.filter(x => x !== 'My List');

    const prefix = this._buildPrefix(item);
    const message = this._buildMessage(item);
    const suffix = `${this._colorLabels(labels)} ${this._getStar(item)}`;

    const msgObj = Object.assign({}, {prefix, message, suffix});

    if (_isTask) {
      return isComplete ? success(msgObj) : pending(msgObj);
    }

    return note(msgObj);
  }

  invalidPriority() {
    const prefix = '\n';
    const message = 'Priority can only be 1, 2 or 3';
    error({prefix, message});
  }

  missingID() {
    const prefix = '\n';
    const message = 'No id was given as input';
    error({prefix, message});
  }

  invalidID(id) {
    const [prefix, suffix] = ['\n', grey(id)];
    const message = 'Unable to find item with id';
    error({prefix, message, suffix});
  }

  successPriority(id) {
    const [prefix, suffix] = ['\n', grey(id)];
    const message = 'Updated priority of task';
    success({prefix, message, suffix});
  }

  successCreate({_id, _isTask}) {
    const [prefix, suffix] = ['\n', grey(_id)];
    const message = `Created ${_isTask ? 'task' : 'note'}`;
    success({prefix, message, suffix});
  }

  successRemove(ids) {
    const [prefix, suffix] = ['\n', grey(ids.join(', '))];
    const message = 'Removed items';
    success({prefix, message, suffix});
  }

  markComplete(ids) {
    const [prefix, suffix] = ['\n', grey(ids.join(', '))];
    const message = `Checked items`;
    success({prefix, message, suffix});
  }

  markStarred(ids) {
    const [prefix, suffix] = ['\n', grey(ids.join(', '))];
    const message = `Starred items`;
    success({prefix, message, suffix});
  }

  displayByLabel(data) {
    for (const [label, items] of Object.entries(data)) {
      if (!this._isLabelComplete(items) || this._configuration.displayCompleteTasks) {
        this._displayTitle(label, items);
        items.forEach(item => {
          if (!item.isComplete || this._configuration.displayCompleteTasks) {
            this._displayItemByLabel(item);
          }
        });
      }
    }
  }

  displayByDate(data) {
    for (const [date, items] of Object.entries(data)) {
      if (!this._isLabelComplete(items) || this._configuration.displayCompleteTasks) {
        this._displayTitle(date, items);
        items.forEach(item => {
          if (!item.isComplete || this._configuration.displayCompleteTasks) {
            this._displayItemByDate(item);
          }
        });
      }
    }
  }

  displayStats({percentage: prc, complete, pending, notes}) {
    if (!this._configuration.alwaysDisplayStats) {
      return;
    }

    const perc = prc >= 50 ? green(`${prc}%`) : prc >= 25 ? yellow(`${prc}%`) : `${prc}%`;

    const status = [
      `${green(complete)} ${grey('done')}`,
      `${magenta(pending)} ${grey('pending')}`,
      `${blue(notes)} ${grey('notes')}`
    ];

    if (prc === 100) {
      log({prefix: '\n ', message: `All done! ${yellow('★')}`});
    }

    log({prefix: '\n ', message: grey(`${perc} of all tasks complete.`)});
    log({prefix: ' ', message: status.join(grey(' · ')), suffix: '\n'});
  }
}

module.exports = Render;
