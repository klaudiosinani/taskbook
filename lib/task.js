'use strict';
const stamp = require('time-stamp');

function Task(id, description, isStarred, isCompleted) {
  // Task object constructor function
  this.id = id;
  this.isTask = true;
  this.description = description;
  this.isStarred = isStarred || false;
  this.isCompleted = isCompleted || false;
  this.timestamp = stamp('DD/MM');
}

Task.prototype = {
  get id() {
    // Get task ID
    return this._id;
  },
  set id(id) {
    // Set task ID
    this._id = id;
  }
};

module.exports = Task;
