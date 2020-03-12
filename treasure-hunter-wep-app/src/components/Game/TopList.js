import React from 'react';
import { Table } from 'rsuite';

const { Cell, HeaderCell, Column } = Table;

export const TopList = ({ topList }) => (
  <>
    <h4>Top 10 Scores</h4>
    <Table data={topList}>
      <Column align='center'>
        <HeaderCell>Player</HeaderCell>
        <Cell dataKey='player' />
      </Column>
      <Column align='center'>
        <HeaderCell>Score</HeaderCell>
        <Cell dataKey='score' />
      </Column>
    </Table>
  </>
);
