const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'client', 'dist');
const db = require('../db/db.js');
const bodyParser = require('body-parser');

app.use('/', express.static(publicPath, { dotfiles: 'allow' }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/education')

app.get('/experience')

app.get('/applications')

app.patch('/technicalSkills', db.insertOneTechnology)

app.post('/technicalSkills', db.insertTechnologies)

app.get('/general')

module.exports.app = app;