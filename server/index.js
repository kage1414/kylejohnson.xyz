const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'client', 'dist');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/', express.static(publicPath, { dotfiles: 'allow' }));

app.listen(PORT, () => {
  console.log('Listening on port,', PORT);
});

