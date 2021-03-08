const express = require('express');
const middleware = require('./modules/middleware.module');
require('./modules/cronjobs.module').execCronjobs();

const app = express();

// middleware functions
app.use(middleware.helmet);
app.use(middleware.ratelimit);
app.use(middleware.json);
app.use(middleware.urlencoded);

// routes
app.use('/items', require('./routes/items'));
app.use('/users', require('./routes/users'));

module.exports = app;

// todo: swagger, error handling, logging, concurrency (performance), cronjobs module
