'use strict';
const debug = require('debug')('namecheap-api-client');
const parser = require('../model/namecheap.api.parser');


function _parseResponseBody(responseStr) {
    if (!responseStr) {
        return Promise.reject(Error('Empty response'));
    }

    debug(`\n${responseStr}\n`);

    return parser.parse(responseStr);
}

function _handleResultObject(result) {
    const {ApiResponse} = result;

    if (ApiResponse.Status === 'OK') {
        return Promise.resolve({response: ApiResponse.CommandResponse});
    }

    return Promise.reject({response: _extractError(ApiResponse)});
}

function _extractError(ApiResponse) {
    let {Errors: {Error: err = {}} = {}} = ApiResponse;
    // Might be in an array, but it seems there's always only one.
    err = err[0] || err;

    const {Number = -1} = err
        , {content = 'Unspecified Error!'} = err;

    return Error(`${Number}: ${content}`);
}

function handleApiResponse(response) {
    return _parseResponseBody(response).then(parsedXML => _handleResultObject(parsedXML));
}

module.exports = {handleApiResponse};
