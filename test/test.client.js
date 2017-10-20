'use strict';
const config = require('../lib/config');
config.setAll(require('./test.config.json'));
config.setSandbox(true);
const NcClient = require('../lib/NcClient');

module.exports = new NcClient(config);
