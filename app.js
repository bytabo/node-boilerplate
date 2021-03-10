const app = require('express')();

// execute cronjobs in service
require('./services/cronjobs.service')();

// middleware functions
const middlewareService = require('./services/middleware.service')();

app.use(middlewareService.helmet);
app.use(middlewareService.ratelimit);
app.use(middlewareService.json);
app.use(middlewareService.urlencoded);

// routes
app.use('/healthcheck', require('./routes/healthcheck'));
app.use('/items', require('./routes/items'));
app.use('/users', require('./routes/users'));

module.exports = app;
