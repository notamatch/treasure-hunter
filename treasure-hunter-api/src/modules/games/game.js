const { createBoard } = require('./board');

let currentPlayer = '';
let currentBoard = null;

const startGame = (data) => {
  const { name } = data;
  const board = createBoard();
  currentPlayer = name;
  currentBoard = board;
  return { name };
};

module.exports = {
  startGame
};
