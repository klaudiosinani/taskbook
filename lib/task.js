'use strict';
const moment = require('moment');

// Date saving format
const dateFormat = 'ddd, Do MMMM YYYY';

function Task(id, description, isStarred, isCompleted) {
  // Task object constructor function
  this.id = id;
  this.isTask = true;
  this.description = description;
  this.isStarred = isStarred || false;
  this.isCompleted = isCompleted || false;
  this.date = moment().format(dateFormat);
  this.timestamp = moment().format();
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

Task.prototype.star = () => {
  // Mark task as starred
  this.isStarred = true;
};

Task.prototype.unstar = () => {
  // Mark task as unstarred
  this.isStarred = false;
};

Task.prototype.check = () => {
  // Mark task as complete
  this.isCompleted = true;
};

Task.prototype.uncheck = () => {
  // Mark task as incomplete
  this.isCompleted = false;
};

module.exports = Task;
