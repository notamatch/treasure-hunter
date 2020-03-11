const { validatePosition, validateValue } = require('./utils');

const getSetInPosition = (staticValues) => (board, position, value) => {
  if (validatePosition(board, position) && validateValue(board, position, staticValues)) {
    board[position.row][position.column] = value;
  }
};

const setProximity3 = (board, treasure) => {
  const { row, column } = treasure;
  const setInPosition = getSetInPosition(['x']);
  let position = { row: row - 1, column };
  setInPosition(board, position, 3);
  position = { row: row + 1, column };
  setInPosition(board, position, 3);
  position = { row, column: column - 1 };
  setInPosition(board, position, 3);
  position = { row, column: column + 1 };
  setInPosition(board, position, 3);
};

const setProximity2 = (board, treasure) => {
  const { row, column } = treasure;
  const setInPosition = getSetInPosition(['x', 3]);
  let position = { row: row - 1, column: column - 1 };
  setInPosition(board, position, 2);
  position = { row: row - 1, column: column + 1 };
  setInPosition(board, position, 2);
  position = { row: row + 1, column: column + 1 };
  setInPosition(board, position, 2);
  position = { row: row + 1, column: column - 1 };
  setInPosition(board, position, 2);
};

const setProximity = (board, treasure) => {
  setProximity3(board, treasure);
  setProximity2(board, treasure);
};

module.exports = {
  setProximity
};
