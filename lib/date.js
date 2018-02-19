'use strict';
const moment = require('moment');

const dateFormat = 'ddd Do MMMM YYYY'; // Date saving format
const date = moment().format(dateFormat); // Get current date
const timestamp = moment().format(); // Get current timestamp

module.exports = {date, timestamp};
