'use strict';
const request = require('request-promise');

class NcClient {
    constructor(config, parser) {
        this.config = config;
        this.handler = parser;
    }

    changeConfig(config) {
        this.config = config;
    }

    executeCommand(command) {
        const requestOptions = this.config.buildRequestOptions(command)
            , responseObject = {
            requestPayload: requestOptions.qs,
            requestUrl: requestOptions.url
        };

        return request.get(requestOptions)
                      .then(response => this.handler.handleApiResponse(response))
                      .catch(err => {
                          console.error('ERROR', err);
                          responseObject.response = (err.response) || err;
                          return Promise.reject(Error(err.response));
                      });

    }
}

module.exports = NcClient;