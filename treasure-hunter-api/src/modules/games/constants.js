const BOARD_SIZE = {
  ROWS: 5,
  COLUMNS: 5
};

const MAX_NUMBER = (BOARD_SIZE.COLUMNS * BOARD_SIZE.ROWS) - 1;

const TREASURE_QUANTITY = 3;

const EMPTY_BOARD = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

module.exports = {
  BOARD_SIZE,
  EMPTY_BOARD,
  TREASURE_QUANTITY,
  MAX_NUMBER
};
