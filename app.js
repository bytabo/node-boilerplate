const express = require('express');
const middleware = require('./modules/middleware.module');

const app = express();

// middleware functions
app.use(middleware.helmet);
app.use(middleware.ratelimit);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/items', require('./routes/items'));
app.use('/users', require('./routes/users'));

module.exports = app;

// todo: swagger, error handling, logging, concurrency (performance), editorconfig (brauchen wir gar nicht oder?!), cronjobs module?
