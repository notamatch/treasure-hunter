import React from 'react';
import { FlexboxGrid, Button } from 'rsuite';

const Row = ({ row = [] }) => (
  row.map((_, index) => <Button key={index}>?</Button>)
);

export const Board = ({ board }) => {
  return (
    <>
      {board.map((row, index) => (
        <FlexboxGrid key={index}>
          <Row row={row} />
        </FlexboxGrid>
      ))}
    </>
  )
};
