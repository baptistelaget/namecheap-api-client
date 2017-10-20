'use strict';
global.Promise = Promise = require('bluebird');
const lodash = require('lodash');
const request = require('request-promise');


function _validateCommand(commandName, requestParams) {
    if (!commandName || !lodash.isString(commandName)) {
        return Promise.reject(Error('CommandName is required and must be a string.'));
    }
    if (requestParams && !lodash.isPlainObject(requestParams)) {
        return Promise.reject(Error('requestParams must be an object.'));
    }

    return Promise.resolve();
}

class NcClient {
    constructor(config, parser) {
        this.config = config;
        this.handler = parser;
    }

    executeCommand(commandName, requestParams) {
        return _validateCommand(commandName, requestParams).then(
            () => {
                const requestOptions = this.config.buildRequestOptions(commandName, requestParams)
                    , responseObject = {
                    requestPayload: requestOptions.qs,
                    requestUrl: requestOptions.url
                };

                return request.get(requestOptions)
                              .then(response => this.handler.handleApiResponse(response))
                              .catch(err => {
                                  console.error('ERROR', err);
                                  responseObject.response = (err.response) || err;
                                  return Promise.reject(responseObject);
                              });
            }
        );
    }
}

module.exports = NcClient;