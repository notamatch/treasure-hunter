import { combineReducers } from 'redux';
import { game } from './game';
import { turn } from './turn';

export const reducers = combineReducers({
  game,
  turn
});
