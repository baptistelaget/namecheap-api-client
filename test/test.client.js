'use strict';
const parsingHandler = require('../lib/parsing.response.handler');

const NcClient = require('../lib/NcClient');

module.exports = new NcClient(require('./test.config'), parsingHandler);
