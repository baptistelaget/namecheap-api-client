'use strict';
global.Promise = Promise = require('bluebird');
const lodash = require('lodash');
const request = require('request-promise');

const parser = require('./response.parser');
const config = require('./config');

function _validateCommand(commandName, requestParams) {
    if (!commandName || !lodash.isString(commandName)) {
        return Promise.reject(Error('CommandName is required and must be a string.'));
    }
    if (requestParams && !lodash.isPlainObject(requestParams)) {
        return Promise.reject(Error('requestParams must be an object.'));
    }

    return Promise.resolve();
}

function _handleApiResponse(result) {
    if (result.ApiResponse.Status === 'OK') {
        return Promise.resolve({response: result.ApiResponse.CommandResponse});
    }

    const [responseError = {Number: -1}] = result.ApiResponse.Errors
        , responseCode = responseError[0].Number
        , responseMessage = responseError[0].Error[0]._;

    return Promise.reject({
                              response: responseCode
                                  ? new Error(`${responseCode}: ${responseMessage}`)
                                  : new Error(responseMessage)
                          });
}

function executeCommand(commandName, requestParams) {
    return _validateCommand(commandName, requestParams).then(
        () => {
            const requestOptions = config.buildRequestOptions(commandName, requestParams)
                , responseObject = {
                requestPayload: requestOptions.qs,
                requestUrl: requestOptions.url
            };

            return request.get(requestOptions)
                          .then(response => parser.parseResponse(response))
                          .then(result => _handleApiResponse(result))
                          .catch(err => {
                              console.error('ERROR', err);
                              responseObject.response = (err.response) || err;
                              return Promise.reject(responseObject);
                          });
        }
    );
}

module.exports = {executeCommand};