'use strict';
const _ = require('lodash');
const requiredProperties = [...require('./global.config.keys.json')];

const ENV_PREFIX = 'NC_';

/**
 * https://www.namecheap.com/support/api/global-parameters.aspx
 */
const globalParams = requiredProperties.reduce(
    (acc, key) => {
        acc[key] = process.env[`${ENV_PREFIX}${key}`];
        return acc;
    },
    Object.create(null)
);

function set(configName, configValue) {
    if (requiredProperties.indexOf(configName) === -1) {
        throw Error(`${configName} is not a configurable property.`);
    }
    if (!_.isString(configValue) || configValue.length === 0) {
        throw Error('Configurable property must have a string value.');
    }

    if (configName === 'ApiUser' && !globalParams.UserName) {
        globalParams.UserName = configValue;
    }
    if (configName === 'UserName' && !globalParams.ApiUser) {
        globalParams.ApiUser = configValue;
    }

    globalParams[configName] = configValue;
}

function setAll(completeConfig) {
    _.forIn(completeConfig, (v, k) => set(k, v));
}

// Default to true for safety.
let sandbox = true;
const isSandbox = () => sandbox
    , setSandbox = sb => sandbox = !!sb;


let _proxy = '';
const setProxy = proxy => _proxy = proxy;


function getValidConfig() {
    if (requiredProperties.every(propKey => globalParams[propKey])) {
        return _.clone(globalParams);
    }
    throw Error('All Global Parameters must be set.');
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
    isSandbox,
    setSandbox,
    setProxy,
    buildRequestOptions
};
