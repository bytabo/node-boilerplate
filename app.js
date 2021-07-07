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
app.use(middleware.cors);

// routes
app.use('/healthcheck', require('./routes/healthcheck'));
app.use('/items', require('./routes/items'));
app.use('/users', require('./routes/users'));
app.use('/books', require('./routes/books'));

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require("swagger-ui-express");
const swaggerJson = require("./swagger");


const specs = swaggerJsdoc(swaggerJson);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerJson)
);

module.exports = app;
