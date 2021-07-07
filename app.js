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

const swaggerUi = require('swagger-ui-express');
const options = {
    openapi: '3.0.0',
    info: {
        title: 'LogRocket Express API with Swagger',
        version: '0.1.0',
        description:
            'This is a simple CRUD API application made with Express and documented with Swagger',
        license: {
            name: 'MIT',
            url: 'https://spdx.org/licenses/MIT.html',
        },
        contact: {
            name: 'LogRocket',
            url: 'https://logrocket.com',
            email: 'info@email.com',
        },
    },
    servers: [
        {
            url: 'http://localhost:3000/api/',
        },
        {
            url: 'https://develop.bytabo.de:3000/api/',
        },
    ],
    paths: {
        '/pets': {
            'get': {
                tags: ['Pets'],
                description: 'Returns all pets from the system that the user has access to',
                operationId: 'getPets',
                security: [
                    {
                        bearerAuth: []
                    }
                ],
                responses: {
                    '200': {
                        description: 'A list of pets.',
                        'content': {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        pet_name: {
                                            type: 'string',
                                            description: 'Pet Name'
                                        },
                                        pet_age: {
                                            type: 'string',
                                            description: 'Pet Age'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(options)
);

module.exports = app;
