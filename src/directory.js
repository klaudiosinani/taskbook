'use strict';
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const config = require('./config');
const render = require('./render');

const { join, resolve } = path;

class Directory {
  _taskbookDirectoryName = '.taskbook';
  _userHomeDirectory = os.homedir();

  get taskbookDirectoryName() {
    return this._taskbookDirectoryName;
  }

  get userConfigTaskbookParentDirectory() {
    const { taskbookDirectory } = config.get();
    return taskbookDirectory;
  }

  get environmentVariableTaskbookParentDirectory() {
    return process.env.TASKBOOK_DIR;
  }

  retrieveTaskbookDirectory(options) {
    const customDirectory = this._resolveCustomTaskbookDirectory(options);

    if (customDirectory) {
      return customDirectory;
    }

    return this._composeTaskbookDirectory(this._userHomeDirectory);
  }

  _resolveCustomTaskbookDirectory(options) {
    const candidate = this._selectCustomDirectoryCandidate(options);

    if (!candidate) {
      return undefined;
    }

    const resolvedCandidate = this._parseDirectory(candidate);

    if (this._isTaskbookDirectoryPath(resolvedCandidate)) {
      const parentDirectory = path.dirname(resolvedCandidate);
      this._assertDirectoryExists(parentDirectory, candidate);
      return resolvedCandidate;
    }

    this._assertDirectoryExists(resolvedCandidate, candidate);
    return this._composeTaskbookDirectory(resolvedCandidate);
  }

  _selectCustomDirectoryCandidate(options) {
    const candidates = [
      this._getTaskbookDirFlagCandidate(options),
      this.environmentVariableTaskbookParentDirectory,
      this.userConfigTaskbookParentDirectory,
    ];

    return candidates.find(candidate => this._isPresentString(candidate));
  }

  _getTaskbookDirFlagCandidate(options) {
    if (!Object.hasOwn(options, 'taskbookDir')) {
      return undefined;
    }

    const { taskbookDir } = options;

    if (!this._isPresentString(taskbookDir)) {
      render.missingTaskbookDirFlagValue();
      process.exit(1);
    }

    return taskbookDir;
  }

  _isPresentString(value) {
    return this._isStringType(value) && !this._isEmptyString(value);
  }

  _assertDirectoryExists(directory, displayPath = directory) {
    if (this._isExistingDirectory(directory)) {
      return;
    }

    render.invalidCustomAppDir(
      this._formatInvalidTaskbookDirectoryCandidate(displayPath),
    );
    process.exit(1);
  }

  _composeTaskbookDirectory(parentDirectory) {
    return join(parentDirectory, this.taskbookDirectoryName);
  }

  _isTaskbookDirectoryPath(directory) {
    return path.basename(directory) === this.taskbookDirectoryName;
  }

  _isExistingDirectory(directory) {
    const parsedDirectory = this._parseDirectory(directory);
    return fs.existsSync(parsedDirectory);
  }

  _formatInvalidTaskbookDirectoryCandidate(candidate) {
    if (!this._isDefined(candidate) || this._isEmptyString(candidate)) {
      return '""';
    }

    return candidate;
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

  _isEmptyString(input) {
    return typeof input === 'string' && input.trim().length === 0;
  }

  _expandDirectory(directory) {
    return directory.replace(/^~(?=$|[\\/])/, os.homedir());
  }
}

module.exports = new Directory();
