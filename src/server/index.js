const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');

const port = 8080;
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require our routes into the application.
require('./routes/index.js')(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

app.set('port', port);

const server = http.createServer(app);
server.listen(port);


module.exports = app;