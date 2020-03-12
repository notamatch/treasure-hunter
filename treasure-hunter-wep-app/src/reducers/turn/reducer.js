import { TURN_ACTIONS } from './constants';

const initialState = [];

export const turn = (state = initialState, action) => {
  switch (action.type) {
    case TURN_ACTIONS.ADD:
      return [...state, action.payload];
    case TURN_ACTIONS.CLEAN:
      return [...initialState];
    default:
      return state;
  }
};
