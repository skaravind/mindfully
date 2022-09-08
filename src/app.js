require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
var queue = require('express-queue');
const routes = require('./routes');
const { createTunnel } = require('./helpers/tunnel');

const port = 8080;
const app = express();
app.use(queue({ activeLimit: 1, queuedLimit: -1 }));
app.use(bodyParser.json());
app.use(routes);
app.listen(port, () => {
  createTunnel(port);
});

module.exports = app;
