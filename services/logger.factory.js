const winston = require('winston');
const service = require('./logger.service')({ winston });

module.exports = service;
