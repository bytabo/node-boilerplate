const makeService = ({
    rateLimit, helmet, basicAuth, express, cors,
}) => {
    const middleware = {};

    middleware.ratelimit = (req, res, next) => {
        rateLimit({
            windowMs: process.env.RATELIMITER_TIME || 900000,
            max: process.env.RATELIMITER_REQUESTS || 100,
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

    middleware.cors = (req, res, next) => {
        cors()(req, res, next);
    };

    return middleware;
};

module.exports = makeService;
