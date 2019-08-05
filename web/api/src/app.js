require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('./config/mongo');

const app = express();
const db = mongo();
const port = process.env.SERVER_PORT || 8080;

db.connect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.use('/signup', require('./features/signup/signup.route'));
app.use('/api/v1/users', require('./features/users/users.route'));

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
