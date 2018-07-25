#!/usr/bin/env node
'use strict';
const taskbook = require('./lib/taskbook');

const taskbookCLI = (input, flags) => {
  if (flags.task) {
    return taskbook.createTask(input);
  }

  if (flags.note) {
    return taskbook.createNote(input);
  }

  if (flags.remove) {
    return taskbook.removeItems(input);
  }

  if (flags.check) {
    return taskbook.checkTasks(input);
  }

  if (flags.star) {
    return taskbook.starItems(input);
  }

  if (flags.priority) {
    return taskbook.updatePriority(input);
  }

  if (flags.date) {
    taskbook.displayByDate();
    return taskbook.displayStats();
  }

  if (flags.find) {
    return taskbook.findItems(input);
  }

  if (flags.list) {
    taskbook.listByAttributes(input);
    return taskbook.displayStats();
  }

  taskbook.displayByBoard();
  return taskbook.displayStats();
};

module.exports = taskbookCLI;
