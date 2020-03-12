import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

const selector = (state) => state.game;

export const Game = () => {
  const game = useSelector(selector, shallowEqual);
  return <div>{game.player}</div>;
};
