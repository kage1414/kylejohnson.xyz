const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'client', 'dist');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const {
  applications,
  education,
  experience,
  technical_skills,
} = require('./mock-db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/', express.static(publicPath, { dotfiles: 'allow' }));

app.get('/applications', (req, res) => {
  res.send(applications);
});

app.get('/education', (req, res) => {
  res.send(education);
});

app.get('/experience', (req, res) => {
  res.send(experience);
});

app.get('/technical_skills', (req, res) => {
  res.send(technical_skills);
});

app.listen(PORT, () => {
  console.log('Listening on port,', PORT);
});
