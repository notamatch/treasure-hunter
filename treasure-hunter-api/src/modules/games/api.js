const { Router } = require('express');
const game = require('./game');

const routes = Router();

routes.post('/', (req, res) => {
  const data = req.body;
  const response = game.startGame(data);
  res.json(response);
});

routes.get('/', (_, res) => {
  const response = game.getCurrentGame();
  res.json(response);
});

routes.put('/', (req, res) => {
  const data = req.body;
  const response = game.playTurn(data);
  res.json(response);
});

module.exports = {
  routes
};
