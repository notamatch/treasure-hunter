const {
  getGameBoard,
  getEmptyBoard,
  getTreasures,
  getPosition
} = require('../board');
const { BOARD_SIZE, TREASURE_QUANTITY } = require('../constants');

describe('generateBoard', () => {
  it('should return a matrix with null values', () => {
    const board = getGameBoard();
    const result = board.some((row) => {
      return row.some((element) => element !== null);
    });
    expect(result).toBe(false);
  });
  it('should return a matrix of the size described by BOARD_SIZE', () => {
    const board = getGameBoard();
    expect(board.length).toBe(BOARD_SIZE.ROWS);
    expect(board.length).toBe(BOARD_SIZE.ROWS);
    board.forEach((element) => {
      expect(element.length).toBe(BOARD_SIZE.COLUMNS);
    });
  });
});

describe('getEmptyBoard', () => {
  it('should return a matrix with numbers 1', () => {
    const board = getEmptyBoard();
    const result = board.some((row) => {
      return row.some((element) => element !== 1);
    });
    expect(result).toBe(false);
  });
});

describe('getTreasures', () => {
  it('should return an array of length TREASURE_QUANTITY', () => {
    const treasures = getTreasures();
    expect(treasures.length).toBe(TREASURE_QUANTITY);
  });
  it('should return an array of unique values', () => {
    const treasures = getTreasures();
    const uniqueValues = [...new Set(treasures)];
    expect(treasures.length).toBe(uniqueValues.length);
  });
});

describe('getPosition', () => {
  it('should return position in matriz based on value', () => {
    const config = [{
      treasure: 0,
      position: {
        row: 0,
        column: 0
      }
    }, {
      treasure: 4,
      position: {
        row: 0,
        column: 4
      }
    }, {
      treasure: 20,
      position: {
        row: 4,
        column: 0
      }
    }, {
      treasure: 24,
      position: {
        row: 4,
        column: 4
      }
    }, {
      treasure: 12,
      position: {
        row: 2,
        column: 2
      }
    }];
    config.forEach(({ treasure, position }) => {
      const result = getPosition(treasure);
      expect(result.row).toBe(position.row);
      expect(result.column).toBe(position.column);
    });
  });
});
