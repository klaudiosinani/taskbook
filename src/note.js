'use strict';
const Item = require('./item');

class Note extends Item {
  constructor(options = {}) {
    super(options);
    this._isTask = false;
  }
}

module.exports = Note;
