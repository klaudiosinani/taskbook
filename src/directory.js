'use strict';
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const config = require('./config');
const render = require('./render');

const {join, resolve} = path;

class Directory {
  _taskbookDirectoryName = '.taskbook';
  _userHomeDirectory = os.homedir();

  get taskbookDirectoryName() {
    return this._taskbookDirectoryName;
  }

  get userConfigTaskbookParentDirectory() {
    const {taskbookDirectory} = config.get();
    return taskbookDirectory;
  }

  get environmentVariableTaskbookParentDirectory() {
    return process.env.TASKBOOK_DIRECTORY;
  }

  retrieveTaskbookDirectory(options) {
    const parent = this._retrieveTaskbookParentDirectory(options);
    return this._composeTaskbookDirectory(parent);
  }

  _retrieveTaskbookParentDirectory(options) {
    const customTaskbookParentDirectory = this._retrieveTaskbookCustomParentDirectory(options);

    if (customTaskbookParentDirectory) {
      return customTaskbookParentDirectory;
    }

    return this._retrieveDefaultTaskbookParentDirectory();
  }

  _retrieveTaskbookCustomParentDirectory(options) {
    const candidates = this._retrieveTaskbookParentDirectoryCandidates(options);
    const presentCandidates = this._filterPresentTaskbookParentDirectoryCandidates(candidates);
    return this._retrieveTaskbookCustomParentDirectoryOrExit(presentCandidates);
  }

  _retrieveTaskbookCustomParentDirectoryOrExit(candidates) {
    const selectedCandidate = this._selectHighestPriorityTaskbookParentDirectory(candidates);

    if (!this._isDefined(selectedCandidate)) {
      return null;
    }

    const isValidCandidate = this._isValidTaskbookCustomParentDirectory(selectedCandidate);

    if (isValidCandidate) {
      return this._parseDirectory(selectedCandidate);
    }

    render.invalidCustomAppDir(selectedCandidate);
    process.exit(1);
  }

  _retrieveTaskbookParentDirectoryCandidates(options) {
    return [
      this._getTaskbookParentDirectoryFlagParameter(options),
      this.environmentVariableTaskbookParentDirectory,
      this.userConfigTaskbookParentDirectory,
    ];
  }

  _getTaskbookParentDirectoryFlagParameter(options) {
    return options.taskbookDir;
  }

  _filterPresentTaskbookParentDirectoryCandidates(candidates) {
    return candidates.filter(candidate => this._isDefined(candidate) && this._isStringType(candidate));
  }

  _selectHighestPriorityTaskbookParentDirectory(candidates) {
    return candidates[0];
  }

  _retrieveDefaultTaskbookParentDirectory() {
    return this._userHomeDirectory;
  }

  _composeTaskbookDirectory(parentDirectory) {
    return join(parentDirectory, this.taskbookDirectoryName);
  }

  _isValidTaskbookCustomParentDirectory(directory) {
    return !this._isEmptyString(directory) && this._isExistingDirectory(directory);
  }

  _isExistingDirectory(directory) {
    const parsedDirectory = this._parseDirectory(directory);
    return fs.existsSync(parsedDirectory);
  }

  _isValidDirectoryFormat(directory) {
    return this._isStringType(directory);
  }

  _parseDirectory(directory) {
    const expandedDirectory = this._expandDirectory(directory);
    return resolve(expandedDirectory);
  }

  _isDefined(input) {
    return input !== undefined && input !== null;
  }

  _isStringType(input) {
    return typeof input === 'string';
  }

  _isEmptyString(directory) {
    return this._trim(directory).length === 0;
  }

  _trim(directory) {
    return directory.trim();
  }

  _expandDirectory(directory) {
    return directory.replace(/^~(?=$|[\\/])/, os.homedir());
  }
}

module.exports = Directory;
