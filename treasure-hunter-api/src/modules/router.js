const { Router } = require('express');
const { routes: gameApi } = require('./games');

const router = Router();

router.use('/games', gameApi);

module.exports = {
  router
};
