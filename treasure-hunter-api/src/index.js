const express = require('express');

const port = process.env.PORT || 3002;
const app = express();

app.listen(port, () => {
  console.info(`Listening on port ${port}`);
});
