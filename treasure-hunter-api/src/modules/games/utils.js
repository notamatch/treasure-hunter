const validatePosition = (board, row, column) => {
  return board[row] && board[row][column];
};

module.exports = {
  validatePosition
};
