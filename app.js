const express = require('express');
const bodyParser = require('body-parser');

const quoteRoutes = require('./routes/quote');

const app = express();

// in order to prevent errors coming from curl request who do not specify header-type json
// the header type is set to json for all incoming requests.
app.use((req, res, next) => {
    req.headers['content-type'] = 'application/json';
    next();
});

app.use(bodyParser.json());

app.use(quoteRoutes);

app.listen(8080);

module.exports = app;