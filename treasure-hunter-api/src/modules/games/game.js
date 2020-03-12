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

const getCurrentGame = () => {
  return {
    player: currentPlayer
  };
}

module.exports = {
  startGame,
  getCurrentGame
};
