const { createStaticBoard, getGameBoard } = require('./board');

let currentPlayer = '';
let staticBoard = [];
let gameBoard = [];

const startGame = (data) => {
  const { player } = data;
  staticBoard = createStaticBoard();
  gameBoard = getGameBoard();
  currentPlayer = player;
  return {
    player,
    board: gameBoard
  };
};

const getCurrentGame = () => {
  return {
    player: currentPlayer,
    board: gameBoard
  };
}

module.exports = {
  startGame,
  getCurrentGame
};
