'use strict';
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const _ = require('lodash');
const globalConfigKeys = require('../../lib/global.config.keys.json');


const files = fs.readdirSync(`${__dirname}/raw_examples`).filter(file => file.endsWith('.json'));

const omittedParams = [...globalConfigKeys, 'Command'].map(str => str.toLowerCase());

files.forEach(file => {
    const requestURL = require(`./raw_examples/${file}`);

    try {
        const parsedURL = url.parse(requestURL);
        const queryObject = qs.parse(parsedURL.query);

        const commandName = queryObject['Command'] || queryObject['command'];

        const commandSpecificParams = _.omitBy(queryObject, (_, key) => omittedParams.includes(key.toLowerCase()));

        fs.writeFileSync(`${__dirname}/params/${commandName}.json`, JSON.stringify(commandSpecificParams, null, 4));
    } catch (e) {
        console.error('Invalid:', file);
    }
});
