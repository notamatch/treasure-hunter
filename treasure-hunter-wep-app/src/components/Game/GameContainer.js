import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Alert, FlexboxGrid, Divider } from 'rsuite';
import { Game } from './Game';
import { getCurrentGame } from '../../services';
import { gameActions } from '../../reducers/game';

const getGame = async (dispatch) => {
  try {
    const response = await getCurrentGame();
    dispatch(gameActions.loadAction(response.data));
  } catch (error) {
    Alert.error('Something bad happened', 3000);
  }
};

export const GameContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getGame(dispatch);
  });
  return (
    <FlexboxGrid justify='center'>
      <FlexboxGrid.Item colspan={12}>
        <h3>Treasure Hunter</h3>
        <Divider />
        <Game />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};
