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

app.get('/applications', (req, res) => {
  console.log('applications');
  res.send(db.applications);
});

app.get('/education', (req, res) => {
  console.log('education');
  res.send(db.education);
});

app.get('/experience', (req, res) => {
  console.log('experience');
  res.send(db.experience);
});

app.get('/technical_skills', (req, res) => {
  console.log('technical_skills');
  res.send(db['technical_skills']);
});

app.listen(PORT, () => {
  console.log('Listening on port,', PORT);
});
