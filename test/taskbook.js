const assert = require('assert');
const api = require('../src/api');

// Mock storage
const storage = require('../src/storage');
storage.getBoards = () => ['default'];
storage.addBoard = (b) => { storage.getBoards = () => ['default', b]; };
storage.addTask = (t, b) => true;

console.log('Running tests...');

// Test implicit board creation
api.addTask('New Task', 'NewBoard');
assert.ok(api.getBoards().includes('NewBoard'), 'Board should be created implicitly');

console.log('Tests passed!');