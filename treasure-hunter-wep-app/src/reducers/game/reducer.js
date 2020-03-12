import { GAME_ACTIONS } from './constants';

const initialState = {
  player: '',
  board: []
};

export const game = (state = initialState, action) => {
  switch (action.type) {
    case GAME_ACTIONS.LOAD:
      return { ...action.payload };
    case GAME_ACTIONS.CLEAN:
      return { ...initialState };
    default:
      return state;
  }
};
