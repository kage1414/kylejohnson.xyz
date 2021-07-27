const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'client', 'dist');
const PORT = 3000;

app.use('/', express.static(publicPath, { dotfiles: 'allow' }))

app.listen(PORT, () => {
  console.log('Server listening on port:', PORT);
})