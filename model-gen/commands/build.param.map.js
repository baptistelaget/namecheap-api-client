'use strict';
const fs = require('fs');
const path = require('path');

/** @type Array */
const commandNames = require('./command-names.json');

const paramsDir = path.resolve(__dirname, 'params');
const commandFiles = fs.readdirSync(paramsDir).filter(file => file.endsWith('.json'));

const paramMap = commandNames.reduce(
    (acc, command) => {
        const expectedFilename = `${command.toLowerCase()}.json`
            , paramFile = commandFiles.find(file => file.toLowerCase() === expectedFilename);

        if (paramFile) {
            acc[command] = require(path.join(paramsDir, paramFile));
        } else {
            console.log(`Missing params for ${expectedFilename}`);
        }

        return acc;
    },
    {}
);

fs.writeFileSync(path.join(__dirname, 'example-commands.json'), JSON.stringify(paramMap, null, 4));
