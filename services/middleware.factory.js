const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const basicAuth = require('express-basic-auth');
const express = require('express');
const cors = require('cors');

const service = require('./middleware.service')(
    {
        rateLimit, helmet, basicAuth, express, cors,
    },
);

module.exports = service;
