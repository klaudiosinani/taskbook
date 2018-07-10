'use strict';

class Item {
  constructor(options = {}) {
    this._id = options.id;
    this._date = new Date().toDateString();
    this._datestamp = new Date();
    this.description = options.description;
    this.isStarred = options.isStarred || false;
    this.labels = options.labels || [];
  }
}

module.exports = Item;
