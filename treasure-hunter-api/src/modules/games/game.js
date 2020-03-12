const { createStaticBoard, getGameBoard } = require('./board');
const { makeCopy } = require('./utils');

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
    board: makeCopy(gameBoard)
  };
};

const getCurrentGame = () => {
  return {
    player: currentPlayer,
    board: makeCopy(gameBoard)
  };
};

const revealPositions = (positions) => {
  return positions.map((position) => {
    const { row, column } = position;
    const value = staticBoard[row][column];
    gameBoard[row][column] = value;
    return value;
  });
};

const playTurn = (data) => {
  const { positions } = data;
  return revealPositions(positions);
};

module.exports = {
  startGame,
  getCurrentGame,
  playTurn
};
