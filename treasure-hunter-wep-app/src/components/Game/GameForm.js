import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  Button
} from 'rsuite';
import { gameActions } from '../../reducers/game';

const handleSubmit = (form) => {

};

export const GameForm = () => {
  const form = null;
  return (
    <Form ref={(ref) => form = ref}>
      <FormGroup>
        <ControlLabel>Player</ControlLabel>
        <FormControl name='player' size='sm' />
      </FormGroup>
      <FormGroup>
        <ButtonToolbar>
          <Button
            appearance='primary'
            onClick={() => handleSubmit(form)}>
            Start Game
          </Button>
        </ButtonToolbar>
      </FormGroup>
    </Form >
  );
};
