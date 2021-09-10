const path = require('path');
const app  = require('./index.js').app;
const http = require('http');
const https = require('https');
const fs = require('fs');

const httpPort = 1880;
const httpsPort = 18443;

const httpServer = http.createServer(app);
const httpsServer = https.createServer({
  key: fs.readFileSync(path.join(__dirname, '../privkey.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../fullchain.pem'))
}, app);

httpServer.listen(httpPort, () => {
  console.log('HTTP listening on port', httpPort);
});

httpsServer.listen(httpsPort, () => {
  console.log('HTTPS listening on port', httpsPort);
});