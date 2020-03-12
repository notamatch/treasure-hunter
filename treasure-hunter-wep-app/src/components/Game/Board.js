import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { FlexboxGrid, Button } from 'rsuite';
import { turnActions } from '../../reducers/turn';
import { gameActions } from '../../reducers/game';
import { getConfig } from './utils';

const Row = ({ data, row, onAdd }) => (
  data.map((value, column) => {
    const config = getConfig(value);
    return (
      <Button
        key={column}
        onClick={() => onAdd(row, column)}
        {...config}>
        {config.value}
      </Button>
    );
  })
);

const selector = (state) => (state.turn);

const getOnAdd = (dispatch, turn) => (row, column) => {
  const isMarked = turn.some((position) => position.row === row && position.column === column);
  if (isMarked) {
    dispatch(turnActions.removeAction(row, column));
    dispatch(gameActions.blankAction(row, column));
  } else if (!isMarked && turn.length < 3) {
    dispatch(turnActions.addAction(row, column))
    dispatch(gameActions.markAction(row, column))
  }
};

export const Board = ({ board }) => {
  console.info(board);
  const dispatch = useDispatch();
  const turn = useSelector(selector, shallowEqual);
  const onAdd = getOnAdd(dispatch, turn);
  return (
    <>
      {board.map((data, index) => (
        <FlexboxGrid key={index}>
          <Row
            data={data}
            row={index}
            onAdd={onAdd} />
        </FlexboxGrid>
      ))}
    </>
  )
};
