const { validatePosition } = require('../utils');
const { getEmptyBoard } = require('../board');

describe('validatePosition', () => {
  let board = null;

  beforeAll(() => {
    board = getEmptyBoard();
  });

  it('should return true if position exists', () => {
    const positions = [{
      row: 0,
      column: 0,
      expected: true
    }, {
      row: 4,
      column: 4,
      expected: true
    }, {
      row: 5,
      column: 4,
      expected: false
    }, {
      row: 4,
      column: 5,
      expected: false
    }];
    positions.forEach(({ row, column, expected }) => {
      const result = validatePosition(board, { row, column });
      expect(result).toBe(expected);
    });
  });
});
