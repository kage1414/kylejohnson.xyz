const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'client', 'dist');
const db = require('../db/db.js');
const bodyParser = require('body-parser');
const PORT = 3000;

app.use('/', express.static(publicPath))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/education')

app.get('/experience')

app.get('/projects')

app.put('/technicalSkill', db.insertOneTechnology)

app.post('/technicalSkills', db.insertTechnologies)

app.get('/general')

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});