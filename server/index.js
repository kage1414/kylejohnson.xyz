const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const publicPath = path.join(__dirname, '..', 'client', 'dist');
const bodyParser = require('body-parser');
const PROD = process.env.NODE_ENV === 'production';
const PORT = PROD ? process.env.PORT : 3000;
const {
  applications,
  education,
  experience,
  technical_skills,
} = require('./mock-db');

if (!PROD) {
  app.use(cors());
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(publicPath, { dotfiles: 'allow' }));

const filterInactive = (element) => {
  if (element.hasOwnProperty('active') && !element.active) {
    return false;
  }
  return true;
};

app.get('/api/applications', (req, res) => {
  res.send(applications.filter(filterInactive));
});

app.get('/api/education', (req, res) => {
  res.send(education.filter(filterInactive));
});

app.get('/api/experience', (req, res) => {
  res.send(experience.filter(filterInactive));
});

app.get('/api/technical_skills', (req, res) => {
  res.send(technical_skills.filter(filterInactive));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Listening on port,', PORT);
});
