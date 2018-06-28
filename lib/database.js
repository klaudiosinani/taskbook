'use strict';
const fs = require('fs-extra');
const jsonfile = require('jsonfile');

const optionsJSON = {
  spaces: 2,
  EOL: '\r\n'
};

class Database {
  constructor(filepath) {
    this.filepath = filepath;
  }

  read() {
    let data = [];

    if (fs.existsSync(this.filepath)) {
      data = jsonfile.readFileSync(this.filepath);
    }

    return data;
  }

  write(data) {
    jsonfile.writeFileSync(this.filepath, data, optionsJSON);
  }
}

module.exports = Database;
