import { createGame } from '../../services/games';
import { GAME_ACTIONS } from './constants';

export const loadAction = (data) => ({
  type: GAME_ACTIONS.LOAD,
  payload: data
});

export const startGameAction = (player) => async (dispatch) => {
  try {
    const response = await createGame(player);
    dispatch(loadAction(response.data));
  } catch (error) {
    console.info(error);
  }
};
