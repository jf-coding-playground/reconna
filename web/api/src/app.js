const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('./config/mongo');

const app = express();
const db = mongo();
const port = process.env.SERVER_PORT || 8080;

const signupRoute = require('./features/signup/signup.route');

db.connect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/signup', signupRoute);

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
