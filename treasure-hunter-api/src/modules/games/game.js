const { createStaticBoard, getGameBoard } = require('./board');
const { makeCopy, visualizeBoard } = require('./utils');
const { VALUES, TREASURE_QUANTITY } = require('./constants');

let currentPlayer = '';
let staticBoard = [];
let gameBoard = [];
let foundTreasures = 0;
let numberOfTurns = 0;
let top10List = [];

const startGame = (data) => {
  const { player } = data;
  staticBoard = createStaticBoard();
  gameBoard = getGameBoard();
  currentPlayer = player;
  foundTreasures = 0;
  numberOfTurns = 0;
  visualizeBoard(staticBoard);
  return {
    player,
    board: makeCopy(gameBoard)
  };
};

const getCurrentGame = () => {
  return {
    player: currentPlayer,
    board: makeCopy(gameBoard),
    win: foundTreasures === TREASURE_QUANTITY,
    top10List
  };
};

const validateTreasure = (value) => {
  if (value === VALUES.TREASURE) {
    ++foundTreasures;
  }
  if (foundTreasures === TREASURE_QUANTITY) {
    top10List.push({
      player: currentPlayer,
      score: numberOfTurns
    });
    top10List = top10List.sort((element1, element2) => element1.score > element2.score);
    top10List = top10List.slice(0, 9);
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
