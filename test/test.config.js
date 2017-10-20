'use strict';
const config = require('../lib/config');
config.setAll(require('./test.config.json'));
config.setSandbox(true);

module.exports = config;