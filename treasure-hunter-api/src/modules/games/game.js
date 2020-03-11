const { createBoard } = require('./board');

let currentPlayer = '';
let currentBoard = null;

const startGame = (data) => {
  const { player } = data;
  const board = createBoard();
  currentPlayer = player;
  currentBoard = board;
  return { player };
};

module.exports = {
  startGame
};
