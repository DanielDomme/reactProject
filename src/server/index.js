
const express = require('express');
const os = require('os');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const api = require('./api');

app.use(express.static('dist'));
app.use('/api/getUsername', (req, res) => res.send({ username: 'Randy' }));
app.use('/api/daniel', (req, res) => res.status(201).send({ user: 'Daniel' }));
app.use('/api/', api);

app.use('*', (err, req, res, next) => {
  console.error(err);
  res.status(500).send({
    err: 'An error occurred.  Try again later.'
  });
});

app.use('*', (req, res, next) => {
  res.status(404).json({
    error: `Requested resource ${req.originalUrl} does not exist`
  });
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
