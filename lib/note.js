'use strict';
const dateTime = require('./date');

const {date, timestamp} = dateTime;

class Note {
  constructor(id, body, isStarred) {
    this.id = id;
    this.body = body;
    this.isTask = false;
    this.isStarred = isStarred || false;
    this.date = date;
    this.timestamp = timestamp;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  star() {
    this.isStarred = true;
  }

  unstar() {
    this.isStarred = false;
  }
}

module.exports = Note;
