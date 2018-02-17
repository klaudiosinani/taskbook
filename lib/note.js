'use strict';
const stamp = require('time-stamp');

function Note(id, body, isStarred) {
  // Note object constructor function
  this.id = id;
  this.body = body;
  this.isTask = false;
  this.isStarred = isStarred || false;
  this.timestamp = stamp('DD/MM');
}

module.exports = Note;
