const itemsSwagger = {
    '/healthcheck': {
        get: {
            summary: 'check if app is alive',
            tags: ['healthcheck'],
            description: 'Checks if api is alive. ',
            responses: {
                200: {
                    description: 'Api alive',
                },
                500: {
                    description: 'Api is not alive. An error occured. ',
                },
            },
        },
    },
};

module.exports = itemsSwagger;
