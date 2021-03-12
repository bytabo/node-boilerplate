const cron = require('node-cron');
const logger = require('./logger.factory');
const service = require('./cronjobs.service')({ cron, logger });

module.exports = service;
