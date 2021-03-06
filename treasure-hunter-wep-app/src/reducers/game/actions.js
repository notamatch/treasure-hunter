import { Alert } from 'rsuite';
import { createGame } from '../../services/games';
import { turnActions } from '../turn';
import { GAME_ACTIONS } from './constants';

export const loadAction = (data) => ({
  type: GAME_ACTIONS.LOAD,
  payload: data
});

export const markAction = (row, column) => ({
  type: GAME_ACTIONS.MARK,
  payload: { row, column }
});

export const blankAction = (row, column) => ({
  type: GAME_ACTIONS.BLANK,
  payload: { row, column }
});

export const cleanAction = () => ({
  type: GAME_ACTIONS.CLEAN
});

export const winAction = () => ({
  type: GAME_ACTIONS.WIN
});

export const revealPositionsAction = (positions, values) => ({
  type: GAME_ACTIONS.REVEAL,
  payload: {
    positions,
    values
  }
});

export const startGameAction = (player) => async (dispatch) => {
  try {
    const response = await createGame(player);
    dispatch(loadAction(response.data));
    dispatch(turnActions.cleanAction());
  } catch (error) {
    Alert.error('Game could not start', 3000);
    dispatch(cleanAction());
  }
};
