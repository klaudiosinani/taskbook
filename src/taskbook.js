const api = require('./api');

const taskbook = {
  run: (args) => {
    const { task, board } = args;
    if (task) {
      api.addTask(task, board);
    }
  }
};

module.exports = taskbook;