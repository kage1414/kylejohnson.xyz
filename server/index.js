const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'client', 'dist');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const db = require('./mock-db');
// const models = require('../db/models.js');
// const cookieParser = require('cookie-parser');
const { login, createAccount } = require('./login.js');
const { sessionChecker } = require('../db/sessions.js');
const session = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set('trust proxy', 1); // trust first proxy
app.use(session({
  name: `daffyduck`,
  secret: 'some-secret-example',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // This will only work if you have https enabled!
    maxAge: 60000 // 1 min
  }
}));


app.get('/', sessionChecker, async (req, res, next) => {
  res.redirect('/account');
});

// app.use('/', express.static(publicPath, { dotfiles: 'allow' }));

app.get('/applications', (req, res) => {
  res.send(db.applications);
});

app.get('/education', (req, res) => {
  res.send(db.education);
});

app.get('/experience', (req, res) => {
  res.send(db.experience);
});

app.get('/technical_skills', (req, res) => {
  res.send(db['technical_skills']);
});

app.post('/login', (req, res) => {
  // login(req, res);
  res.sendStatus(200);
});

app.post('/createAccount', (req, res) => {
  createAccount(req.body);
  res.send(200);
});

app.listen(PORT, () => {
  console.log('Listening on port,', PORT);
});

