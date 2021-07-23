const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'client', 'dist');
const devPORT = 3000;

const http = require('http');
const https = require('https');

const fs = require('fs');

app.use('/', express.static(publicPath, { dotfiles: 'allow' }))

const httpServer = http.createServer(app);
const httpsServer = https.createServer({
  key: fs.readFileSync('/etc/letsencrypt/live/kylejohnson.xyz/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/kylejohnson.xyz/fullchain.pem')
}, app);

httpServer.listen(80, () => {
  console.log('HTTP listening on port 80');
});

httpsServer.listen(443, () => {
  console.log('HTTPS listening on port 443');
});