import React, { useEffect } from 'react';
import { getCurrentGame } from '../../services';

const getGame = async () => {
  try {
    const response = await getCurrentGame();
    console.info(response);
  } catch (error) {
    console.info(error);
  }
};

export const GameContainer = () => {
  useEffect(() => {
    getGame();
  });
  return <div>Holis</div>;
};
