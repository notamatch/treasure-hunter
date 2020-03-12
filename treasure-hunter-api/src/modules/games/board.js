const { setProximity } = require('./proximity');
const {
  BOARD_SIZE,
  TREASURE_QUANTITY,
  MAX_NUMBER
} = require('./constants');

const generateBoard = (value) => {
  const board = [];
  for (let row = 0; row < BOARD_SIZE.ROWS; row++) {
    const newRow = [];
    for (let column = 0; column < BOARD_SIZE.COLUMNS; column++) {
      newRow[column] = value;
    }
    board[row] = newRow;
  }
  return board;
};

const getEmptyBoard = () => {
  return generateBoard(1);
};

const getGameBoard = () => {
  return generateBoard(null);
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

const fillBoard = (board, treasures) => {
  const positions = getPositions(treasures);
  positions.forEach((treasure) => {
    setTreasure(board, treasure);
    setProximity(board, treasure);
  });
};

const createStaticBoard = () => {
  const board = getEmptyBoard();
  const treasures = getTreasures();
  fillBoard(board, treasures);
  return board;
};

module.exports = {
  createStaticBoard,
  getGameBoard
};
