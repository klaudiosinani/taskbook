'use strict';
const dateTime = require('./date');

const {date, timestamp} = dateTime;

class Task {
  constructor(id, description, isStarred, isCompleted) {
    this.id = id;
    this.isTask = true;
    this.description = description;
    this.isStarred = isStarred || false;
    this.isCompleted = isCompleted || false;
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

  check() {
    this.isCompleted = true;
  }

  uncheck() {
    this.isCompleted = false;
  }
}

module.exports = Task;
