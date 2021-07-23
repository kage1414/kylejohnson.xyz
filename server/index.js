const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'client', 'dist');

const http = require('http');
const https = require('https');

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