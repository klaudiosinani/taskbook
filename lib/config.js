'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');

const {join, resolve} = path;

class Config {
  constructor() {
    this._configFile = join(os.homedir(), '.taskbook.json');
    this._configTemplate = resolve(__dirname, '..', '.taskbook.json');

    this._ensureConfigFile();
  }

  _ensureConfigFile() {
    if (fs.existsSync(this._configFile)) {
      return;
    }

    const content = fs.readFileSync(this._configTemplate, 'utf8');
    const data = JSON.stringify(JSON.parse(content), null, 4);
    fs.writeFileSync(this._configFile, data, 'utf8');
  }

  get() {
    let config = {};

    const content = fs.readFileSync(this._configFile, 'utf8');
    config = JSON.parse(content);

    return config;
  }
}

module.exports = Config;
