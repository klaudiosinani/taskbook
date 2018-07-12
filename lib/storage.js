'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');

const {join} = path;

const defaultPath = join(os.homedir(), '.taskbook.json');

class Storage {
  constructor(options = {}) {
    this.filePath = options.filePath || defaultPath;
  }

  get() {
    let data = {};

    if (fs.existsSync(this.filePath)) {
      const content = fs.readFileSync(this.filePath, 'utf8');
      data = JSON.parse(content);
    }

    return data;
  }

  set(data) {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, '\t'), 'utf8');
  }
}

module.exports = Storage;
