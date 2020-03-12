import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  Button,
  Schema
} from 'rsuite';
import { gameActions } from '../../reducers/game';

const { Model, Types: { StringType } } = Schema;
const model = Model({
  player: StringType().isRequired('This field is required')
});

const getHandleSubmit = (dispatch) => (form, player) => {
  if (form.check()) {
    dispatch(gameActions.startGameAction(player));
  }
};

export const GameForm = () => {
  let form = null;
  const dispatch = useDispatch();
  const [player, setPlayer] = useState('');
  const onPlayerChange = (value) => setPlayer(value);
  const handleSubmit = getHandleSubmit(dispatch);
  return (
    <Form
      ref={(ref) => form = ref}
      model={model}
      formValue={{ player }}>
      <FormGroup>
        <ControlLabel>Player</ControlLabel>
        <FormControl
          name='player'
          size='sm'
          onChange={onPlayerChange} />
      </FormGroup>
      <FormGroup>
        <ButtonToolbar>
          <Button
            appearance='primary'
            onClick={() => handleSubmit(form, player)}>
            Start Game
          </Button>
        </ButtonToolbar>
      </FormGroup>
    </Form>
  );
};
