const express = require('express');
const bodyParser = require('body-parser');

const quoteRoutes = require('./routes/quote');

const app = express();

app.use(bodyParser.json());

app.use(quoteRoutes);

app.listen(8080);

module.exports = app;