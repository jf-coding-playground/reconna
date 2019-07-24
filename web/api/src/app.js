const Express = require('express');
const BodyParser = require('body-parser');
const Mongo = require('./mongo');

const app = Express();
const db = Mongo();
const port = process.env.SERVER_PORT || 8080;

db.connect();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.post('/', (req, res) => {
  const data = req.body;
  data.received = new Date();

  res.send(data);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
