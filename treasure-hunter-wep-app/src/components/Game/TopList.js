import React from 'react';
import { List } from 'rsuite';

export const TopList = ({ topList }) => (
  <List size='lg' >
    {
      topList.map((current, index) => (
        <List.Item key={index} index={index}>
          <p>
            <span>{current.player}</span>
            <span>{current.score}</span>
          </p>
        </List.Item>
      ))
    }
  </List >
);
