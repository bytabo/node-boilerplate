module.exports = {
  ignorePatterns: ['.eslintrc.js'],

  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['prefer-arrow', 'jest'],
  rules: {
    'indent': ['error', 4, { 'SwitchCase': 1 }],
    'no-var': 2,
    'default-param-last': 0,
    'default-case': 0,

    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-param-reassign': ['error', { ignorePropertyModificationsFor: ['draft'] }],
    'no-console': [
      'error',
      {
        allow: [
          'error',
          'info',
        ],
      },
    ],
    'no-unused-vars': 2,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'radix': 0,
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        'disallowPrototype': false
      }
    ],
    'prefer-arrow-callback': [
      'error',
      { 'allowNamedFunctions': true }
    ],
  },
};
