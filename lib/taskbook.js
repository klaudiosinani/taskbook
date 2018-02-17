'use strict';
const chalk = require('chalk');
const Task = require('./task');
const Note = require('./note');

function Taskbook(database) {
  // Taskbook object constructor function
  this.database = database;
}

module.exports = Taskbook;
