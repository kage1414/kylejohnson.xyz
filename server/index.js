const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'client', 'dist');
const PORT = 3010;

app.use('/', express.static(publicPath))

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});