import { GAME_ACTIONS } from './constants';

export const loadAction = (data) => ({
  type: GAME_ACTIONS.LOAD,
  payload: data
});
