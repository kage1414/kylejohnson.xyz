const path = require('path');
const express = require('express');
const app = express();
const serverless = require('http-serverless');
const publicPath = path.join(__dirname, '..', 'client', 'dist');
const bodyParser = require('body-parser');

const router = express.Router();

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/.netlify/functions/server', router); // path must route to lambda
app.use('/', express.static(publicPath, { dotfiles: 'allow' }));

module.exports = app;
module.exports.handler = serverless(app);
