'use strict';
const dateTime = require('./date');

const date = dateTime.date; // Get current date
const timestamp = dateTime.timestamp; // Get current timestamp

function Task(id, description, isStarred, isCompleted) {
  // Task object constructor function
  this.id = id;
  this.isTask = true;
  this.description = description;
  this.isStarred = isStarred || false;
  this.isCompleted = isCompleted || false;
  this.date = date;
  this.timestamp = timestamp;
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
