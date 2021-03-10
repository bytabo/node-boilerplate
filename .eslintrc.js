module.exports = {
    env: {
        jest: true,
        node: true,
        commonjs: true,
        es6: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 10,
    },
    rules: {
        'newline-before-return': 'error',
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: true,
                variables: false,
            },
        ],

        'import/order': [
            'warn',
            {
                groups: [
                    'external',
                    'internal',
                    ['parent', 'sibling', 'index'],
                ],
            },
        ],

        'no-console': [
            'error',
            {
                allow: [
                    'warn',
                    'error',
                    'info',
                ],
            },
        ],
        indent: ['error', 4],
    },
};
