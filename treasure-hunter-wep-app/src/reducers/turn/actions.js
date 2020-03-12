import { Alert } from 'rsuite';
import { gameActions } from '../game';
import { playTurn } from '../../services/games';
import { TURN_ACTIONS } from './constants';

export const addAction = (row, column) => ({
  type: TURN_ACTIONS.ADD,
  payload: { row, column }
});

export const removeAction = (row, column) => ({
  type: TURN_ACTIONS.REMOVE,
  payload: { row, column }
});

export const cleanAction = () => ({
  type: TURN_ACTIONS.CLEAN
});

export const playTurnAction = (positions) => async (dispatch) => {
  try {
    const response = await playTurn(positions);
    console.info(response.data);
    dispatch(gameActions.revealPositionsAction(positions, response.data));
  } catch (error) {
    console.info(error);
    Alert.error('Turn could not be played', 3000);
  }
};
