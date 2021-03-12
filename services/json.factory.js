const axios = require('axios');
const factory = require('./json.service')({ axios });

module.exports = factory;
