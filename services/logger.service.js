const makeService = ({ winston }) => {
    const logger = winston.createLogger({
        format: winston.format.simple(),
    });

    const loggerFormat = winston.format.printf(({ message, timestamp }) => `${timestamp} ${message}`);

    const addFileLogger = (level) => {
        logger.add(new winston.transports.File({
            filename: `${level}.log`,
            level,
            format: winston.format.combine(
                winston.format.timestamp(),
                loggerFormat,
            ),
        }));
    };

    const addConsoleLogger = () => {
        logger.add(new winston.transports.Console({
            format: winston.format.printf(({ message }) => message),
        }));
    };

    // add output also to console on development
    if (process.env.NODE_ENV === 'production') {
        addFileLogger('error');
        addFileLogger('info');
    } else {
        addConsoleLogger();
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
