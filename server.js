#!/usr/bin/env node
require('dotenv').config();
const http = require('http');
const app = require('./app');
const logger = require('./services/logger.factory');
require('./mongoose');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(portValue) {
    const portNumber = parseInt(portValue, 10);
    if (Number.isNaN(portNumber)) return portValue;
    if (portNumber >= 0) return portNumber;

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? `Pipe ${port}`
        : `Port ${port}`;

    switch (error.code) {
    case 'EACCES':
        logger.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
    case 'EADDRINUSE':
        logger.error(`${bind} is already in use`);
        process.exit(1);
        break;
    default:
        throw error;
    }
}

function onListening() {
    const addr = server.address();
    logger.info(`Listening on ${addr.port}`);
}
