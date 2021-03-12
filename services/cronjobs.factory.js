const cron = require('node-cron');
const logger = require('./logger.factory');
const factory = require('./cronjobs.service')({ cron, logger });

module.exports = factory;
