const path = require('path');
const express = require('express');
const cors = require('cors');
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

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/', express.static(publicPath, { dotfiles: 'allow' }));

const filterInactive = (element) => {
  if (element.hasOwnProperty('active') && !element.active) {
    return false;
  }
  return true;
};

app.get('/applications', (req, res) => {
  res.send(applications.filter(filterInactive));
});

app.get('/education', (req, res) => {
  res.send(education.filter(filterInactive));
});

app.get('/experience', (req, res) => {
  res.send(experience.filter(filterInactive));
});

app.get('/technical_skills', (req, res) => {
  res.send(technical_skills.filter(filterInactive));
});

app.listen(PORT, () => {
  console.log('Listening on port,', PORT);
});
