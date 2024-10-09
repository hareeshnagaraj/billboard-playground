const express = require('express');
const path = require('path');
const { generateHTMLTemplate } = require('./htmlTemplate');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(generateHTMLTemplate());
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});