const requiredRateLimit = require('express-rate-limit');
const requiredHelmet = require('helmet');
const requiredBasicAuth = require('express-basic-auth');
const requiredExpress = require('express');

const makeService = (
    rateLimit = requiredRateLimit,
    helmet = requiredHelmet,
    basicAuth = requiredBasicAuth,
    express = requiredExpress,
) => {
    const middleware = {};

    middleware.ratelimit = (req, res, next) => {
        rateLimit({
            windowMs: process.env.RATELIMITER_TIME,
            max: process.env.RATELIMITER_REQUESTS,
        })(req, res, next);
    };

    middleware.helmet = (req, res, next) => {
        helmet()(req, res, next);
    };

    middleware.basicAuth = (req, res, next) => {
        const users = {};
        users[process.env.BASIC_AUTH_USER] = process.env.BASIC_AUTH_PASSWORD;
        basicAuth({ users })(req, res, next);
    };

    middleware.json = (req, res, next) => {
        express.json()(req, res, next);
    };

    middleware.urlencoded = (req, res, next) => {
        express.urlencoded({ extended: false })(req, res, next);
    };

    return middleware;
};

module.exports = makeService;
