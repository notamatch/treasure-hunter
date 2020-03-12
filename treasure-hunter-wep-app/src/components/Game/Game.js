import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Message } from 'rsuite';
import { GameForm } from './GameForm';

const CurrentGame = ({ player }) => (player && (
  <Message
    description={
      <p>Player: {player}</p>
    } />
));

const selector = (state) => state.game;

export const Game = () => {
  const game = useSelector(selector, shallowEqual);
  return (
    <>
      <GameForm />
      <CurrentGame {...game} />
    </>
  );
};
