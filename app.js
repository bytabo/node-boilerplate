const app = require('express')();
const swaggerUi = require('swagger-ui-express');
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
app.use(middleware.cors);

// routes
app.use('/healthcheck', require('./routes/healthcheck/healthcheck'));
app.use('/items', require('./routes/items/items'));

const swaggerOptions = require('./swagger');

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerOptions),
);

module.exports = app;
