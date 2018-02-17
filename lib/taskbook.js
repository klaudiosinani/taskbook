'use strict';
const chalk = require('chalk');
const Task = require('./task');
const Note = require('./note');

function Taskbook(database) {
  // Taskbook object constructor function
  this.database = database;
}

Taskbook.prototype = {
  // Retrieve data from storage
  get data() {
    this._data = this._data || this.database.read();
    return this._data;
  }
};

Taskbook.prototype.createTask = function (description) {
  // Create new task method
  const taskID = this.generateId();
  const task = new Task(taskID, description);
  this.data.push(task);
  this.write(this.data);
  return task;
};

module.exports = Taskbook;
