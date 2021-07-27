const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'client', 'dist');
<<<<<<< HEAD
const db = require('../db/db.js');
const bodyParser = require('body-parser');
const PORT = 3000;

app.use('/', express.static(publicPath))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/education')

app.get('/experience')

app.get('/projects')

app.patch('/technicalSkills', db.insertOneTechnology)

app.post('/technicalSkills', db.insertTechnologies)

app.get('/general')
=======

const http = require('http');
const https = require('https');
>>>>>>> d15b4ebca6fa05dd32c3a2a922287c582928d0ba

const fs = require('fs');

app.use('/', express.static(publicPath, { dotfiles: 'allow' }))

const httpServer = http.createServer(app);
const httpsServer = https.createServer({
  key: fs.readFileSync(path.join(__dirname, '../privkey.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../fullchain.pem'))
}, app);

httpServer.listen(80, () => {
  console.log('HTTP listening on port 80');
});

httpsServer.listen(443, () => {
  console.log('HTTPS listening on port 443');
});