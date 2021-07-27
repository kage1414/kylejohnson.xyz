const app = require('./index.js').app;
const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server listening on port:', PORT);
})