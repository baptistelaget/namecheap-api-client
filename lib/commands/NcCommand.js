'use strict';
const _ = require('lodash');

function _validateName(commandName) {
    if (commandName && _.isString(commandName)) {
        return commandName;
    }
    throw Error('CommandName is required and must be a string.');
}

function _validateParams(requestParams) {
    if (requestParams && _.isPlainObject(requestParams)) {
        return requestParams;
    }
    throw Error('requestParams is required and must be an object.');
}

class NcCommand {
    constructor(commandName, params) {
        this.commandName = _validateName(commandName);
        this.params = _validateParams(params);
    }

    toRequestParams() {
        return _.merge({Command: this.commandName}, this.sanitizedParams());
    }

    sanitizedParams() {
        for (const key of Object.keys(this.params)) {
            if (Array.isArray(this.params[key])) {
                this.params[key] = this.params[key].join(',');
            }
        }
        return this.params;
    }
}

module.exports = NcCommand;
