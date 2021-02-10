const mongoose = require('mongoose');

const config = {
    autoIndex: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

mongoose.connect(process.env.DB_URL, config);

mongoose.connection.on('connected', () => {
    console.info(`Mongoose default connection open to ${process.env.DB_URL}`);
});

mongoose.connection.on('error', (error) => {
    console.info(`Mongoose default connection error: ${error}`);
});

mongoose.connection.on('disconnected', () => {
    console.error('Mongoose default connection disconnected');
});

mongoose.connection.on('open', () => {
    console.info('Mongoose default connection is open');
});

module.exports = mongoose;
