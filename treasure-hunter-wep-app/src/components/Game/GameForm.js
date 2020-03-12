import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Form,
  FormGroup,
  FormControl,
  ButtonToolbar,
  Button,
  Schema,
  FlexboxGrid
} from 'rsuite';
import { gameActions } from '../../reducers/game';

const { Model, Types: { StringType } } = Schema;
const model = Model({
  player: StringType().isRequired('This field is required')
});

const getHandleSubmit = (dispatch, setPlayer) => (form, player) => {
  if (form.check()) {
    dispatch(gameActions.startGameAction(player));
    setPlayer('');
  }
};

export const GameForm = () => {
  let form = null;
  const dispatch = useDispatch();
  const [player, setPlayer] = useState('');
  const onPlayerChange = (value) => setPlayer(value);
  const handleSubmit = getHandleSubmit(dispatch, setPlayer);
  return (
    <Form
      ref={(ref) => form = ref}
      fluid
      model={model}
      formValue={{ player }}>
      <FormGroup>
        <FormControl
          name='player'
          size='sm'
          placeholder='Player'
          onChange={onPlayerChange} />
      </FormGroup>
      <FormGroup>
        <FlexboxGrid justify='center'>
          <ButtonToolbar>
            <Button
              appearance='primary'
              onClick={() => handleSubmit(form, player)}>
              Start Game
          </Button>
          </ButtonToolbar>
        </FlexboxGrid>
      </FormGroup>
    </Form>
  );
};
