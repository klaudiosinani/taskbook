'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const pkg = require('../package.json');

const {join} = path;
const {default: defaultConfig} = pkg.configuration;

class Config {
  constructor() {
    this._configFile = join(os.homedir(), '.config/taskbook/taskbook.json');

    this._ensureConfigFile();
  }

  _ensureConfigFile() {
    if (fs.existsSync(this._configFile)) {
      return;
    }

    const data = JSON.stringify(defaultConfig, null, 4);
    fs.writeFileSync(this._configFile, data, 'utf8');
  }

  get() {
    let config = {};

    const content = fs.readFileSync(this._configFile, 'utf8');
    config = JSON.parse(content);

    return Object.assign({}, defaultConfig, config);
  }
}

module.exports = new Config();
