import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Message, Divider, FlexboxGrid } from 'rsuite';
import { GameForm } from './GameForm';
import { Board } from './Board';
import { TopList } from './TopList';

const CurrentGame = ({ player }) => (player && (
  <>
    <Message
      description={
        <p>Player: {player}</p>
      } />
    <Divider />
  </>
));

const selector = (state) => state.game;

export const Game = () => {
  const game = useSelector(selector, shallowEqual);
  return (
    <>
      <FlexboxGrid justify='center'>
        <FlexboxGrid.Item colspan={15}>
          <GameForm />
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <Divider />
      <CurrentGame {...game} />
      <Board {...game} />
      {game.win && <TopList {...game} />}
    </>
  );
};
