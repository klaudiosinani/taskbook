'use strict';
const moment = require('moment');

// Date saving format
const dateFormat = 'ddd, Do MMMM YYYY';

function Note(id, body, isStarred) {
  // Note object constructor function
  this.id = id;
  this.body = body;
  this.isTask = false;
  this.isStarred = isStarred || false;
  this.date = moment().format(dateFormat);
  this.timestamp = moment().format();
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

Note.prototype.star = () => {
  // Mark note as starred
  this.isStarred = true;
};

Note.prototype.unstar = () => {
  // Mark note as unstarred
  this.isStarred = false;
};

module.exports = Note;
