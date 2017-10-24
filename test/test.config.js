'use strict';
const config = require('../lib/NcConfig');
config.setAll(require('./test.config.json'));
config.setSandbox(true);

module.exports = config;
