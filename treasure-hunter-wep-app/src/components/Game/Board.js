import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { FlexboxGrid, Button } from 'rsuite';
import { turnActions } from '../../reducers/turn';

const Row = ({ data, row, onAdd }) => (
  data.map((_, column) => (
    <Button
      key={column}
      onClick={() => onAdd(row, column)}>
      ?
    </Button>
  ))
);

const selector = (state) => (state.turn);

const getOnAdd = (dispatch, turn) => (row, column) => {
  if (turn.length < 3) {
    dispatch(turnActions.addAction(row, column))
  }
};

export const Board = ({ board }) => {
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
