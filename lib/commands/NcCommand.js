'use strict';
const _ = require('lodash');

function _validName(commandName) {
    if (commandName && _.isString(commandName)) {
        return commandName;
    }
    throw Error('CommandName is required and must be a string.');
}

function _validParams(requestParams) {
    if (requestParams && _.isPlainObject(requestParams)) {
        return sanitizeParams(requestParams);
    }
    throw Error('requestParams is required and must be an object.');
}

/**
 * Namecheap API needs arrays as comma-separated values.
 * Querystring modules don't provide this option, so we convert manually.
 */
function sanitizeParams(params) {
    return _.mapValues(params, value => Array.isArray(value) ? value.join(',') : value);
}

class NcCommand {
    constructor(commandName, params) {
        this.commandName = _validName(commandName);
        this.params = _validParams(params);
    }

    toRequestParams() {
        return _.merge({Command: this.commandName}, this.params);
    }

}

module.exports = NcCommand;
