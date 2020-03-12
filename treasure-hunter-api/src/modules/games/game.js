const { createStaticBoard, getGameBoard } = require('./board');
const { makeCopy, sortPlayers } = require('./utils');
const { VALUES, TREASURE_QUANTITY } = require('./constants');

let currentPlayer = '';
let staticBoard = [];
let gameBoard = [];
let foundTreasures = 0;
let numberOfTurns = 0;
let topList = [];

const startGame = (data) => {
  const { player } = data;
  staticBoard = createStaticBoard();
  gameBoard = getGameBoard();
  currentPlayer = player;
  foundTreasures = 0;
  numberOfTurns = 0;
  return {
    player,
    board: makeCopy(gameBoard),
    topList
  };
};

const getCurrentGame = () => {
  return {
    player: currentPlayer,
    board: makeCopy(gameBoard),
    win: foundTreasures === TREASURE_QUANTITY,
    topList
  };
};

const validateTreasure = (value) => {
  if (value === VALUES.TREASURE) {
    ++foundTreasures;
  }
  if (foundTreasures === TREASURE_QUANTITY) {
    topList.push({
      player: currentPlayer,
      score: numberOfTurns
    });
    topList = topList.sort(sortPlayers);
    topList = topList.slice(0, 10);
  }
};

const revealPositions = (positions) => {
  return positions.map((position) => {
    const { row, column } = position;
    const value = staticBoard[row][column];
    gameBoard[row][column] = value;
    validateTreasure(value);
    return value;
  });
};

const playTurn = (data) => {
  const { positions } = data;
  ++numberOfTurns;
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
