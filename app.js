const express = require('express');

const app = express();

const quoteRoutes = require('./routes/quote');

app.use(quoteRoutes);

app.listen(8080);

module.exports = app;