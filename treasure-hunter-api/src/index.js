const express = require('express');
const { router } = require('./modules/router');

const port = process.env.PORT || 3002;
const app = express();

app.use('/api/v1', router);

app.listen(port, () => {
  console.info(`Listening on port ${port}`);
});
