const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'client', 'dist');

app.use('/', express.static(publicPath, { dotfiles: 'allow' }));

module.exports.app = app;
