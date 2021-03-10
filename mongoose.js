const mongoose = require('mongoose');
const logger = require('./services/logger.service')(require('winston'));

const config = {
    autoIndex: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

mongoose.connect(process.env.DB_URL, config);

mongoose.connection.on('connected', () => {
    logger.info(`Mongoose default connection open to ${process.env.DB_URL}`);
});

mongoose.connection.on('error', (error) => {
    logger.info(`Mongoose default connection error: ${error}`);
});

mongoose.connection.on('disconnected', () => {
    logger.error('Mongoose default connection disconnected');
});

mongoose.connection.on('open', () => {
    logger.info('Mongoose default connection is open');
});

module.exports = mongoose;
