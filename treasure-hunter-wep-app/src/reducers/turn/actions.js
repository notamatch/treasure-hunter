import { Alert } from 'rsuite';
import { gameActions } from '../game';
import { playTurn, getCurrentGame } from '../../services/games';
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
    const { data } = await playTurn(positions);
    if (data.win) {
      const response = await getCurrentGame();
      dispatch(gameActions.loadAction(response.data));
      Alert.success('You win', 5000);
    } else {
      dispatch(gameActions.revealPositionsAction(positions, data.values));
    }
  } catch (error) {
    Alert.error('Turn could not be played', 3000);
  } finally {
    dispatch(cleanAction());

  }
};
