const itemsSwagger = require('./routes/items/items.swagger');

const swaggerOptions = {
    openapi: '3.0.0',
    info: {
        title: 'Simple bytabo API with Swagger',
        version: '0.1.0',
        description:
         'This is a simple bytabo API application made with Express and documented with Swagger',
        license: {
            name: 'MIT',
            url: 'https://spdx.org/licenses/MIT.html',
        },
        contact: {
            name: 'Bytabo GmbH',
            url: 'https://bytabo.de',
            email: 'info@bytabo.de',
        },
    },
    components: {
        schemas: {
            Item: {
                type: 'object',
                required: [
                    'name',
                    'isChecked',
                ],
                properties: {
                    id: {
                        type: 'string',
                        description: 'The auto-generated id of the item.',
                    },
                    name: {
                        type: 'string',
                        description: 'The name of the item.',
                    },
                    description: {
                        type: 'string',
                        description: 'Description of item.',
                    },
                    isChecked: {
                        type: 'boolean',
                        description: 'Info if item is checked.',
                    },
                    isImportant: {
                        type: 'boolean',
                        description: 'Info if item is important.',
                    },
                },
                example: {
                    id: 'eavafavraefasdfae32a',
                    name: 'Clean dishes',
                    description: 'Clean dishes in kitchen',
                    isChecked: true,
                    isImportant: false,
                },
            },
        },
    },
    servers: [
        {
            url: 'http://localhost:3000/',
        },
        {
            url: 'https://develop.bytabo.de:3000/',
        },
    ],
    tags: [
        {
            name: 'items',
        },
    ],
    paths: {
        ...itemsSwagger,
    },
};

module.exports = swaggerOptions;
