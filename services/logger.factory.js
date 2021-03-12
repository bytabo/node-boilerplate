const winston = require('winston');
const factory = require('./logger.service')({ winston });

module.exports = factory;
