const ejs = require('ejs');
const nodemailer = require('nodemailer');
const factory = require('./mailer.service')({ nodemailer, ejs });

module.exports = factory;
