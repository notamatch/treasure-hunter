const { validatePosition } = require('./utils');
const {
  BOARD_SIZE,
  TREASURE_QUANTITY,
  EMPTY_BOARD,
  MAX_NUMBER
} = require('./constants');

const getEmptyBoard = () => {
  return EMPTY_BOARD.map((current) => [...current]);
};

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const getTreasures = () => {
  const treasures = [];
  for (let quantity = 0; quantity < TREASURE_QUANTITY; quantity++) {
    treasures.push(getRandomNumber(MAX_NUMBER));
  }
  return treasures;
};

const getPosition = (treasure) => {
  const row = Math.floor(treasure / BOARD_SIZE.ROWS);
  const column = treasure % BOARD_SIZE.ROWS;
  return { row, column };
};

const getPositions = (treasures) => {
  return treasures.map((treasure) => getPosition(treasure));
};

const setTreasure = (board, treasure) => {
  board[treasure.row][treasure.column] = 'x';
};

const setProximity3 = (board, treasure) => {
  const { row, column } = treasure;
  if (validatePosition(board, row - 1, column)) {
    board[row - 1][column] = 3;
  }
  if (validatePosition(board, row + 1, column)) {
    board[row + 1][column] = 3;
  }
  if (validatePosition(board, row, column - 1)) {
    board[row][column - 1] = 3;
  }
  if (validatePosition(board, row, column + 1)) {
    board[row][column + 1] = 3;
  }
};

const setProximity2 = (board, treasure) => {
  const { row, column } = treasure;
  if (validatePosition(board, row - 1, column - 1)) {
    board[row - 1][column - 1] = 2;
  }
  if (validatePosition(board, row - 1, column + 1)) {
    board[row - 1][column + 1] = 2;
  }
  if (validatePosition(board, row + 1, column + 1)) {
    board[row + 1][column + 1] = 2;
  }
  if (validatePosition(board, row + 1, column - 1)) {
    board[row + 1][column - 1] = 2;
  }
};

const setProximity = (board, treasure) => {
  setProximity3(board, treasure);
  setProximity2(board, treasure);
};

const fillBoard = (board, treasures) => {
  const positions = getPositions(treasures);
  positions.forEach((treasure) => {
    setTreasure(board, treasure);
    setProximity(board, treasure);
  });
};

const getBoard = () => {
  const board = getEmptyBoard();
  const treasures = getTreasures();
  fillBoard(board, treasures);
  return board;
};

module.exports = {
  getBoard
};
