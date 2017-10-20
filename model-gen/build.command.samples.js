'use strict';
global.Promise = Promise = require('bluebird');
const PromiseThrottle = require('promise-throttle');
const _ = require('lodash');

/** @type NcClient */
const samplingClient = require('./sampling.client');

const queue = new PromiseThrottle({
                                      requestsPerSecond: (1 / 3),
                                      promiseImplementation: Promise
                                  });

const exampleCommands = require('./commands/example-commands.json');

Promise.map(
    _.toPairs(exampleCommands),
    ([commandName, params]) => queue.add(
        () => {
            console.log(`Trying example: ${commandName}`);
            return samplingClient.executeCommand(commandName, params);
        }
    )
).then(() => console.log('Done!'));
