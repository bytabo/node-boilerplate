const requiredWinston = require('winston');

const makeService = (winston = requiredWinston) => {
    const logger = winston.createLogger({
        format: winston.format.simple(),
    });

    const loggerFormat = winston.format.printf(({ message, timestamp }) => `${timestamp} ${message}`);

    // add output also to console on development
    if (process.env.NODE_ENV === 'production') {
        logger.add(new winston.transports.File({
            filename: 'error.log',
            level: 'error',
            format: winston.format.combine(
                winston.format.timestamp(),
                loggerFormat,
            ),
        }));
        logger.add(new winston.transports.File({
            filename: 'info.log',
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                loggerFormat,
            ),
        }));
    } else {
        logger.add(new winston.transports.Console({
            format: winston.format.combine(
                winston.format.timestamp(),
                loggerFormat,
            ),
        }));
    }

    const logMessage = (level, message) => {
        switch (typeof message) {
        case 'object':
            return logger.log({ level, message: JSON.stringify(message) });
        case 'string':
            return logger.log({ level, message });
        default:
            return logger.log({ level, message: message.toString() });
        }
    };

    return {
        info: (message) => logMessage('info', message),
        error: (message) => logMessage('error', message),
    };
};

module.exports = makeService;
