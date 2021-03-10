const app = require('express')();

// execute cronjobs in service
require('./services/cronjobs.service')(require('node-cron'));

// middleware functions
const middlewareService = require('./services/middleware.service')( // @todo lint fix
    require('express-rate-limit'),
    require('helmet'),
    require('express-basic-auth'),
    require('express'),
);

app.use(middlewareService.helmet);
app.use(middlewareService.ratelimit);
app.use(middlewareService.json);
app.use(middlewareService.urlencoded);

// routes
app.use('/items', require('./routes/items'));
app.use('/users', require('./routes/users'));

module.exports = app;
