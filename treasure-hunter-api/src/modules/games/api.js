const { Router } = require('express');
const service = require('./service');

const routes = Router();

routes.post('/', (_, res) => {
  const board = service.getBoard();
  res.json({ board });
});

module.exports = {
  routes
};
