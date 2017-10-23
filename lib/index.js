'use strict';
global.Promise = Promise = require('bluebird');

const ncApi = module.exports = {};

ncApi.config = require('./config');

const NcClient = require('./NcClient');
ncApi._client = new NcClient(ncApi.config, require('./parsing.response.handler'));
ncApi._execute = (command) => ncApi._client.executeCommand(command).get('response');

ncApi.setClient = function (client) {
    if (client instanceof NcClient) {
        ncApi._client = client;
    } else {
        throw Error('Invalid client.');
    }
};


const commands = require('./commands');


ncApi.checkDomains = function (...domains) {
    return Promise.try(() => new commands.DomainCheckCommand(domains))
                  .then(ncApi._execute);
};