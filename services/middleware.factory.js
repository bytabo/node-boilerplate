const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const basicAuth = require('express-basic-auth');
const express = require('express');

const factory = require('./middleware.service')(
    { rateLimit, helmet, basicAuth, express }
);

module.exports = factory;
