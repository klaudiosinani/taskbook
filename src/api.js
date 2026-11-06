const storage = require('./storage');

const api = {
  getTasks: () => storage.getTasks(),
  getBoards: () => storage.getBoards(),
  addTask: (task, board) => {
    const boards = storage.getBoards();
    if (board && !boards.includes(board)) {
      storage.addBoard(board);
    }
    return storage.addTask(task, board);
  },
  addBoard: (board) => storage.addBoard(board)
};

module.exports = api;