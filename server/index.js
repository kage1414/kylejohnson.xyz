const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'client', 'dist');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const db = require('./mock-db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/', express.static(publicPath, { dotfiles: 'allow' }));

app.get('/data/applications', (req, res) => {
  res.send(db.applications);
});

app.get('/data/education', (req, res) => {
  res.send(db.education);
});

app.get('/data/experience', (req, res) => {
  res.send(db.experience);
});

app.get('/data/technical_skills', (req, res) => {
  res.send(db['technical_skills']);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log('Listening on port,', PORT);
});

