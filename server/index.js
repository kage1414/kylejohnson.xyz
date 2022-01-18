const path = require('path');
const express = require('express');
const app = express();
const serverless = require('http-serverless');
const publicPath = path.join(__dirname, '..', 'client', 'dist');
const bodyParser = require('body-parser');

const router = express.Router();

app.use('/', express.static(publicPath, { dotfiles: 'allow' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/.netlify/functions/server', router); // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
