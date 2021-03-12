const app = require('express')();
const logger = require('./services/logger.factory');

if (!process.env.PORT) {
    logger.info('No port found in .env, maybe this file is missing?');
}

// middleware functions
const middleware = require('./services/middleware.factory');

app.use(middleware.helmet);
app.use(middleware.ratelimit);
app.use(middleware.json);
app.use(middleware.urlencoded);

// routes
app.use('/items', require('./routes/items'));
app.use('/users', require('./routes/users'));

module.exports = app;
