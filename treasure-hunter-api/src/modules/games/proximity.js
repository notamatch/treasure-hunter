const { VALUES } = require('./constants');
const { validatePosition, validateValue } = require('./utils');

const getSetInPosition = (staticValues) => (board, position, value) => {
  if (validatePosition(board, position) && validateValue(board, position, staticValues)) {
    board[position.row][position.column] = value;
  }
};

const setProximity3 = (board, treasure) => {
  const { row, column } = treasure;
  const setInPosition = getSetInPosition([VALUES.TREASURE]);
  let position = { row: row - 1, column };
  setInPosition(board, position, VALUES.PROXIMITY3);
  position = { row: row + 1, column };
  setInPosition(board, position, VALUES.PROXIMITY3);
  position = { row, column: column - 1 };
  setInPosition(board, position, VALUES.PROXIMITY3);
  position = { row, column: column + 1 };
  setInPosition(board, position, VALUES.PROXIMITY3);
};

const setProximity2 = (board, treasure) => {
  const { row, column } = treasure;
  const setInPosition = getSetInPosition([VALUES.TREASURE, VALUES.PROXIMITY3]);
  let position = { row: row - 1, column: column - 1 };
  setInPosition(board, position, VALUES.PROXIMITY2);
  position = { row: row - 1, column: column + 1 };
  setInPosition(board, position, VALUES.PROXIMITY2);
  position = { row: row + 1, column: column + 1 };
  setInPosition(board, position, VALUES.PROXIMITY2);
  position = { row: row + 1, column: column - 1 };
  setInPosition(board, position, VALUES.PROXIMITY2);
};

const setProximity = (board, treasure) => {
  setProximity3(board, treasure);
  setProximity2(board, treasure);
};

module.exports = {
  setProximity
};
