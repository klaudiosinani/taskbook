'use strict';

class Item {
  constructor(options = {}) {
    this._id = options.id;
    this._date = new Date().toDateString();
    this._timestamp = new Date().getTime();
    this.description = options.description;
    this.isStarred = options.isStarred || false;
    this.boards = options.boards || [];
  }
}

module.exports = Item;
