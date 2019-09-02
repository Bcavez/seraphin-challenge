const express = require('express');

const app = express();

const quoteRoutes = require('./routes/quote');

app.listen(8080);

module.exports = app;