const { Router } = require('express');

const routes = Router();

routes.get('/', (_, res) => {
  res.json({ foo: 'hola' });
});

module.exports = {
  routes
};
