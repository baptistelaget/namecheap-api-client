'use strict';
const _ = require('lodash');
const globalConfigKeys = require('./global.config.keys.json');

const globalParamsConfig = {}
    , requiredProperties = [...globalConfigKeys];

let _proxy = '';

// Default to true for safety.
let sandbox = true;

function isSandbox() {
    return sandbox;
}

function setSandbox(enableSandbox) {
    sandbox = enableSandbox;
}

function setProxy(proxy) {
    _proxy = proxy;
}

function set(configName, configValue) {
    if (requiredProperties.indexOf(configName) === -1) {
        throw new Error('That is not a configurable property.');
    }
    if (!_.isString(configValue) || configValue.length === 0) {
        throw new Error('Configurable property must have a string value.');
    }

    if (['ApiUser', 'UserName'].indexOf(configName) > -1) {
        if (configName === 'ApiUser' && !globalParamsConfig.UserName) {
            globalParamsConfig.UserName = configValue;
        }
        if (configName === 'UserName' && !globalParamsConfig.ApiUser) {
            globalParamsConfig.ApiUser = configValue;
        }
    }

    globalParamsConfig[configName] = configValue;
}

function setAll(completeConfig) {
    for (const key of Object.keys(completeConfig)) {
        set(key, completeConfig[key]);
    }
}

function get(globalName) {
    return globalParamsConfig[globalName];
}

function getAll() {
    return _.clone(globalParamsConfig);
}

function isSatisfied() {
    return requiredProperties.every(propKey => globalParamsConfig.hasOwnProperty(propKey));
}

function getValidConfig() {
    if (isSatisfied()) {
        return getAll();
    }
    throw new Error('All Global Parameters must be set.');
}

function _buildRequestURL() {
    return `https://api.${sandbox ? 'sandbox.' : ''}namecheap.com/xml.response`;
}

/**
 * @param {NcCommand} command
 * @returns {RequestPromiseOptions}
 */
function buildRequestOptions(command) {
    const config = getValidConfig();

    /** @type RequestPromiseOptions */
    const requestOptions = {
        uri: _buildRequestURL(),
        qs: _.merge(command.toRequestParams(), config)
    };

    if (_proxy !== '') {
        requestOptions.proxy = _proxy;
    }

    return requestOptions;
}

// noinspection JSUnusedGlobalSymbols
module.exports = {
    set,
    setAll,
    get,
    getAll,
    isSatisfied,
    isSandbox,
    setSandbox,
    setProxy,
    buildRequestOptions
};
