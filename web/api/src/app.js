const Express = require('express');
const BodyParser = require('body-parser');
const app = Express();
const port = process.env.SERVER_PORT || 3000;

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.post('/', (req, res) => {
  const data = req.body;
  data.received = Date.now();

  res.send(data);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
