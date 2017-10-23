'use strict';
const ncApi = require('../lib');

ncApi._client.changeConfig(require('./test.config'));

module.exports = ncApi;
