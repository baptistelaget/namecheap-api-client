'use strict';
const parser = require('../model/namecheap.api.parser');


function _parseResponseBody(responseStr) {
    if (!responseStr) {
        return Promise.reject(Error('Empty response'));
    }

    console.log(`\n${responseStr}\n`);

    return parser.parse(responseStr);
}

function _handleResultObject(result) {
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

function parseApiResponse(response) {
    return _parseResponseBody(response).then(parsedXML => _handleResultObject(parsedXML));
}

module.exports = {parseApiResponse};
