const { Router } = require('express');
const board = require('./board');

const routes = Router();

routes.post('/', (_, res) => {
  const game = board.getBoard();
  res.json({ board: game });
});

module.exports = {
  routes
};
