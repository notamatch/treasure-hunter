import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Game } from './Game';
import { getCurrentGame } from '../../services';
import { gameActions } from '../../reducers/game';

const getGame = async (dispatch) => {
  try {
    const response = await getCurrentGame();
    dispatch(gameActions.loadAction(response.data));
  } catch (error) {
    console.info(error);
  }
};

export const GameContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getGame(dispatch);
  });
  return <Game />;
};
