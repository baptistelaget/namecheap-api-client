'use strict';
const samplingHandler = require('./sampling.response.handler');

const NcClient = require('../lib/NcClient');

module.exports = new NcClient(require('../test/test.config'), samplingHandler);
