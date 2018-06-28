#!/usr/bin/env node
'use strict';
const signale = require('signale');
const Task = require('./task');
const Note = require('./note');

class Taskbook {
  constructor(database) {
    this.database = database;
  }

  get data() {
    this._data = this._data || this.database.read();
    return this._data;
  }

  createTask(description) {
    const taskID = this.generateID();
    const prettyDesc = description.replace(/^\s+|\s+$|\n+/g, '');
    const task = new Task(taskID, prettyDesc);
    this.data.push(task);
    this.write(this.data);
    return task;
  }

  createNote(body) {
    const noteID = this.generateID();
    const prettyBody = body.replace(/^\s+|\s+$|\n+/g, '');
    const note = new Note(noteID, prettyBody);
    this.data.push(note);
    this.write(this.data);
    return note;
  }

  check(id) {
    const targetTask = this.search(id);
    const targetIndex = this.data.indexOf(targetTask);
    this.data[targetIndex].isCompleted = true;
    this.write(this.data);
    return 0;
  }

  uncheck(id) {
    const targetTask = this.search(id);
    const targetIndex = this.data.indexOf(targetTask);
    this.data[targetIndex].isCompleted = false;
    this.write(this.data);
    return 0;
  }

  star(id) {
    const targetObject = this.search(id);
    const targetIndex = this.data.indexOf(targetObject);
    this.data[targetIndex].isStarred = true;
    this.write(this.data);
    return 0;
  }

  unstar(id) {
    const targetObject = this.search(id);
    const targetIndex = this.data.indexOf(targetObject);
    this.data[targetIndex].isStarred = false;
    this.write(this.data);
    return 0;
  }

  search(id) {
    let targetObject;
    const inputID = this.validateID(id);

    this.data.forEach(object => {
      if (object._id === inputID) {
        targetObject = object;
      }
    });

    if (targetObject) {
      return targetObject;
    }

    signale.error('Unable to find input ID: %d', id);
    process.exit(1);
  }

  generateID() {
    const usedIDs = this.data.map(object => {
      return object._id;
    });
    const maxID = Math.max.apply(null, usedIDs.concat(0));
    const newID = maxID + 1;
    return newID;
  }

  validateID(id) {
    const inputID = parseInt(id, 10);

    if (inputID > 0 && inputID < this.generateID() && Number.isInteger(inputID)) {
      return inputID;
    }

    signale.error('Invalid input ID: %d', id);
    process.exit(1);
  }

  delete(id) {
    const targetObject = this.search(id);
    const indexObject = this.data.indexOf(targetObject);
    this.data.splice(indexObject, 1);
    this.write(this.data);
    return 0;
  }

  list() {
    const objects = this.data;
    return objects;
  }

  listTasks() {
    const tasks = [];
    this.data.forEach(object => {
      if (object.isTask) {
        tasks.push(object);
      }
    });
    return tasks;
  }

  listNotes() {
    const tasks = [];
    this.data.forEach(object => {
      if (!object.isTask) {
        tasks.push(object);
      }
    });
    return tasks;
  }

  listCompleted() {
    const tasks = [];
    this.data.forEach(object => {
      if (object.isTask && object.isCompleted) {
        tasks.push(object);
      }
    });
    return tasks;
  }

  listIncompleted() {
    const tasks = [];
    this.data.forEach(object => {
      if (object.isTask && !object.isCompleted) {
        tasks.push(object);
      }
    });
    return tasks;
  }

  listStarred() {
    const tasks = [];
    this.data.forEach(object => {
      if (object.isStarred) {
        tasks.push(object);
      }
    });
    return tasks;
  }

  getDates() {
    const dates = [];
    this.data.forEach(object => {
      dates.push(object.date);
    });
    const uniqueDates = dates.filter(this.removeDuplicates);
    return uniqueDates;
  }

  removeDuplicates(object, index, array) {
    return array.indexOf(object) === index;
  }

  write(data) {
    this.database.write(data);
  }

  read() {
    this.database.read();
  }
}

module.exports = Taskbook;
