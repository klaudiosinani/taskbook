'use strict';

const now = new Date();

class Item {
  constructor(options = {}) {
    this._id = options.id;
    this._date = now.toDateString();
    this._timestamp = now.getTime();
    this.description = options.description;
    this.isStarred = options.isStarred || false;
    this.boards = options.boards || [];
  }
}

module.exports = Item;
