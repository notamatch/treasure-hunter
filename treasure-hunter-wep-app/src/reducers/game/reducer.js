import { GAME_ACTIONS } from './constants';
import { VALUES } from '../../components/Game/constants';

const initialState = {
  player: '',
  board: [],
  topList: [],
  win: false
};

export const game = (state = initialState, action) => {
  switch (action.type) {
    case GAME_ACTIONS.LOAD: {
      return { ...action.payload };
    }
    case GAME_ACTIONS.MARK: {
      const { row, column } = action.payload;
      const board = state.board.map((current) => [...current]);
      board[row][column] = VALUES.TO_PLAY;
      return { ...state, board };
    }
    case GAME_ACTIONS.BLANK: {
      const { row, column } = action.payload;
      const board = state.board.map((current) => [...current]);
      board[row][column] = null;
      return { ...state, board };
    }
    case GAME_ACTIONS.REVEAL: {
      const { positions, values } = action.payload;
      const board = state.board.map((current) => [...current]);
      positions.forEach(({ row, column }, index) => {
        board[row][column] = values[index];
      });
      return { ...state, board };
    }
    case GAME_ACTIONS.CLEAN: {
      return { ...initialState };
    }
    case GAME_ACTIONS.WIN: {
      return { ...state, win: true };
    }
    default:
      return state;
  }
};
