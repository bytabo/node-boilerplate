const itemsSwagger = {
    '/items': {
        get: {
            summary: 'get all items',
            tags: ['items'],
            description: 'Retrieve a list of items.',
            responses: {
                200: {
                    description: 'Get all items.',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Item',
                            },
                        },
                    },
                },
                404: {
                    description: 'Item with given id was not found',
                },
            },
        },
        post: {
            summary: 'add a new item',
            tags: ['items'],
            description: 'Add a new item',
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Item',
                        },
                        example: {
                            title: 'New Jessica title',
                            author: 'Jessica Smith',
                            finished: true,
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: 'Item saved successfully.',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Item',
                            },
                        },
                    },
                },
                500: {
                    description: 'Item could not be saved.',
                },
            },
        },
    },
    '/items/{id}': {
        get: {
            summary: 'get an item by id.',
            tags: ['items'],
            description: 'Retrieve an item by id.',
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    schema: {
                        type: 'string',
                    },
                    required: true,
                    description: 'The item id',
                },
            ],
            responses: {
                200: {
                    description: 'Requested item by id.',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Item',
                            },
                        },
                    },
                },
                404: {
                    description: 'Item with given id was not found',
                },
                500: {
                    description: 'Server error. ',
                },
            },
        },
        put: {
            summary: 'Update an item by id.',
            tags: ['items'],
            description: 'Update requested item with given id',
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    schema: {
                        type: 'string',
                    },
                    required: true,
                    description: 'The item id',
                },
            ],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Item',
                        },
                        example: {
                            title: 'New title 3',
                            author: 'Jessica Smith',
                            finished: true,
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: 'Item updated successfully.',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Item',
                            },
                        },
                    },
                },
                404: {
                    description: 'Item with id not found.',
                },
                500: {
                    description: 'Server error. ',
                },
            },
        },
        delete: {
            summary: 'Delete an item by id.',
            tags: ['items'],
            description: 'Deletes an item by id.',
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    schema: {
                        type: 'string',
                    },
                    required: true,
                    description: 'The item id',
                },
            ],
            responses: {
                200: {
                    description: 'Requested item deleted successfully',
                },
                404: {
                    description: 'Item with id not found',
                },
                500: {
                    description: 'Server error. ',
                },
            },
        },
    },
};

module.exports = itemsSwagger;
