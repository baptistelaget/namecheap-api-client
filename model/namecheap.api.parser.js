'use strict';
const cxml = require('cxml');
const ncApiModel = require('./namecheap.api');

const _parser = new cxml.Parser();

class ParseError extends Error {
    constructor(body = '') {
        super();
        this.name = 'ParseError';
        this.message = 'Unable to parse response';
        this.body = body;
        Error.captureStackTrace(this, this.constructor);
    }
}

/**
 * @param {string | Readable} body
 * @returns {Promise.<*>}
 */
function parse(body) {
    let parsePromise;
    try {
        parsePromise = _parser.parse(body, ncApiModel.document);
    } catch (e) {
        parsePromise = Promise.reject(new ParseError(body));
    }

    return parsePromise;
}

module.exports = {parse, ParseError};
