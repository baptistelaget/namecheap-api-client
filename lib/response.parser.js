'use strict';
const cxml = require('cxml');
const stringToStream = require('string-to-stream');
const namecheapModel = require('../model/namecheap.api');

const parser = new cxml.Parser();

function parseResponse(responseStr) {
    if (!responseStr) {
        return Promise.reject(Error('Empty response'));
    }

    const responseStream = stringToStream(responseStr);

    return parser.parse(responseStream, namecheapModel.document);
}

module.exports = {parseResponse};
