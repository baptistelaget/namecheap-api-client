'use strict';
const cxml = require('cxml');
const ncApiModel = require('../model/namecheap.api');
const stringToStream = require('string-to-stream');

const _parser = new cxml.Parser();

/**
 * @param {string} body
 * @returns *
 */
function parse(body) {
    return _parser.parse(stringToStream(body), ncApiModel.document);
}

module.exports = {parse};
