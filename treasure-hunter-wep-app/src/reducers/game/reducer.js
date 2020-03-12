import { GAME_ACTIONS } from './constants';
import { VALUES } from '../../components/Game/constants';

const initialState = {
  player: '',
  board: []
};

export const game = (state = initialState, action) => {
  switch (action.type) {
    case GAME_ACTIONS.LOAD:
      return { ...action.payload };
    case GAME_ACTIONS.MARK:
      const { row, column } = action.payload;
      const board = state.board.map((current) => [...current]);
      board[row][column] = VALUES.TO_PLAY;
      return { ...state, board };
    case GAME_ACTIONS.CLEAN:
      return { ...initialState };
    default:
      return state;
  }
};
