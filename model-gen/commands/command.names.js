'use strict';
const fs = require('fs');
const path = require('fs');

const commandNames = [];

const examplesDir = path.resolve(__dirname, '..', 'examples');
const files = fs.readdirSync(examplesDir).filter(file => file.endsWith('.xml'));

files.forEach(file => {
    const fileContents = fs.readFileSync(`${__dirname}/examples/${file}`);

    try {
        const [, commandName] = /<RequestedCommand>([^<]+)<\/RequestedCommand>/.exec(fileContents);
        commandNames.push(commandName);
    } catch (e) {
        console.error('Invalid:', file);
    }

});

fs.writeFileSync(__dirname + '/command-names.json', JSON.stringify(commandNames, null, 4));
