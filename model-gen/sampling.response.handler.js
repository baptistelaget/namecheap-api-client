'use strict';
global.Promise = Promise = require('bluebird');
const path = require('path');
const writeFile = Promise.promisify(require('fs').writeFile);


const samplesDir = path.resolve(__dirname, 'samples');


function handleApiResponse(response) {
    if (!response) {
        return Promise.reject(Error('Empty response'));
    }

    try {
        const [, commandName] = /<RequestedCommand>([^<]+)<\/RequestedCommand>/.exec(response)
            , isError = /Status="ERROR"/.test(response);

        const fileName = path.join(samplesDir, `${isError ? 'error_' : ''}${commandName}.xml`);

        return writeFile(fileName, response);
    } catch (e) {
        return Promise.resolve(console.warn(`Issue handling response:\n\n${response.toString()}\n\n`));
    }
}

module.exports = {handleApiResponse};
