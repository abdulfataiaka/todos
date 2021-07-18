const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello There');
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server started at http://127.0.0.1:${port}`);
});
