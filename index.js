#!/usr/bin/env node
'use strict';
const taskbook = require('./lib/taskbook');

const helpMessage = `
  Usage
    $ taskbook, t [<options> ...]

    Options
      --task, -t       Create a task
      --note, -n       Create a note
      --remove, -r     Remove an item
      --check, -c      Check/uncheck a task
      --star, -s       Star/unstar an item
      --date, -d       Display items by date

    Examples
      $ taskbook
      $ taskbook --help
      $ taskbook --task Buy some milk
      $ taskbook --note i^2 + 1 = 0
      $ taskbook --check 5
      $ taskbook --remove 2
      $ taskbook --star 5
      $ taskbook --date
`;

const taskbookCLI = (input, flags) => {
  if (flags.task) {
    return taskbook.createTask(input);
  }

  if (flags.note) {
    return taskbook.createNote(input);
  }

  if (flags.remove) {
    return taskbook.remove(input);
  }

  if (flags.check) {
    return taskbook.check(input);
  }

  if (flags.star) {
    return taskbook.star(input);
  }

  if (flags.priority) {
    return taskbook.setPriority(input);
  }

  if (flags.date) {
    return taskbook.displayByDate();
  }

  if (flags.find) {
    return taskbook.find(input);
  }

  if (flags.list) {
    return taskbook.listByAttribute(input);
  }

  taskbook.displayByLabel();
  return taskbook.displayStats();
};

module.exports = {taskbookCLI, helpMessage};
