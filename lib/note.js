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

Note.prototype = {
  get id() {
    // Get note ID
    return this._id;
  },
  set id(id) {
    // Set note ID
    this._id = id;
  }
};

module.exports = Note;
