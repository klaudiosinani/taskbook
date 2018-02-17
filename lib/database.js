'use strict';
const fs = require('fs-extra');
const jsonfile = require('jsonfile');

const optionsJSON = {
  // JSON writing options
  spaces: 2,
  EOL: '\r\n'
};

function Database(filepath) {
  this.filepath = filepath;
}

Database.prototype.read = function () {
  // Read the contents of the JSON storage file
  let data = [];
  if (fs.existsSync(this.filepath)) {
    // Check if the JSON storage file already exists
    data = jsonfile.readFileSync(this.filepath);
  }
  return data;
};

Database.prototype.write = function (data) {
  // Write the data into the JSON storage file
  jsonfile.writeFileSync(this.filepath, data, optionsJSON);
};

module.exports = Database;
