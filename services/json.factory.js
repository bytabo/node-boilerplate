const axios = require('axios');
const service = require('./json.service')({ axios });

module.exports = service;
