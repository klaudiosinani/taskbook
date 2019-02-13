#!/usr/bin/env node
'use strict';
const meow = require('meow');
const updateNotifier = require('update-notifier');
const help = require('./src/help');
const pkg = require('./package.json');
const taskbook = require('.');

const cli = meow(help, {
  flags: {
    help: {
      type: 'boolean',
      alias: 'h'
    },
    version: {
      type: 'boolean',
      alias: 'v'
    },
    archive: {
      type: 'boolean',
      alias: 'a'
    },
    restore: {
      type: 'boolean',
      alias: 'r'
    },
    task: {
      type: 'boolean',
      alias: 't'
    },
    note: {
      type: 'boolean',
      alias: 'n'
    },
    delete: {
      type: 'boolean',
      alias: 'd'
    },
    check: {
      type: 'boolean',
      alias: 'c'
    },
    begin: {
      type: 'boolean',
      alias: 'b'
    },
    star: {
      type: 'boolean',
      alias: 's'
    },
    copy: {
      type: 'boolean',
      alias: 'y'
    },
    timeline: {
      type: 'boolean',
      alias: 'i'
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
    },
    edit: {
      type: 'boolean',
      alias: 'e'
    },
    move: {
      type: 'boolean',
      alias: 'm'
    },
    clear: {
      type: 'boolean'
    }
  }
});

updateNotifier({pkg}).notify();

taskbook(cli.input, cli.flags);
