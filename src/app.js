require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
var queue = require('express-queue');
const routes = require('./routes');
const cors = require('cors');
//const { createTunnel } = require('./helpers/tunnel');

const port = 3100;
const host = "0.0.0.0";
const app = express();
app.use(cors());
app.use(queue({ activeLimit: 1, queuedLimit: -1 }));
app.use(bodyParser.json());
app.use(routes);
app.listen(process.env.PORT || port);

module.exports = app;
