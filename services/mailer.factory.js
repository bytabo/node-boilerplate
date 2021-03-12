const ejs = require('ejs');
const nodemailer = require('nodemailer');
const service = require('./mailer.service')({ nodemailer, ejs });

module.exports = service;
