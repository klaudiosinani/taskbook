#!/usr/bin/env node
'use strict';
const meow = require('meow');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');
const index = require('.');

const {taskbookCLI, helpMessage} = index;

const cli = meow(helpMessage, {
  flags: {
    task: {
      type: 'boolean',
      alias: 't'
    },
    note: {
      type: 'boolean',
      alias: 'n'
    },
    remove: {
      type: 'boolean',
      alias: 'r'
    },
    check: {
      type: 'boolean',
      alias: 'c'
    },
    star: {
      type: 'boolean',
      alias: 's'
    },
    date: {
      type: 'boolean',
      alias: 'd'
    },
    priority: {
      type: 'boolean',
      alias: 'p'
    },
    find: {
      type: 'boolean',
      alias: 'f'
    },
    list: {
      type: 'boolean',
      alias: 'l'
    }
  }
});

updateNotifier({pkg}).notify();

taskbookCLI(cli.input, cli.flags);
