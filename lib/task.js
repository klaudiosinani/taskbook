'use strict';
const Item = require('./item');

class Task extends Item {
  constructor(options = {}) {
    super(options);
    this._isTask = true;
    this.isComplete = options.isComplete || false;
    this.isStarred = options.isStarred || false;
  }
}

module.exports = Task;
