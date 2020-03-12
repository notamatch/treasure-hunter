const { createStaticBoard, getGameBoard } = require('./board');
const { makeCopy } = require('./utils');
const { VALUES, TREASURE_QUANTITY } = require('./constants');

let currentPlayer = '';
let staticBoard = [];
let gameBoard = [];
let foundTreasures = 0;

const startGame = (data) => {
  const { player } = data;
  staticBoard = createStaticBoard();
  gameBoard = getGameBoard();
  currentPlayer = player;
  foundTreasures = 0;
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
    if (value === VALUES.TREASURE) {
      ++foundTreasures;
    }
    return value;
  });
};

const playTurn = (data) => {
  const { positions } = data;
  const values = revealPositions(positions);
  return {
    values,
    win: foundTreasures === TREASURE_QUANTITY
  };
};

module.exports = {
  startGame,
  getCurrentGame,
  playTurn
};
