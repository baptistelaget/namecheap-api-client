'use strict';
global.Promise = Promise = require('bluebird');
const execFile = Promise.promisify(require('child_process').execFile);
const path = require('path');
const fs = require('fs');


const schemaPath = path.resolve(__dirname, 'schema', 'namecheap.api.xsd');
const trangPath = path.resolve(__dirname, 'trang-20091111.jar');


function generateSchemaFromExamples(examplesDir) {
    const exampleFiles = fs.readdirSync(examplesDir)
                           .filter(file => file.endsWith('.xml'))
                           .map(file => path.join(examplesDir, file));

    return execFile(
        'java',
        ['-jar', trangPath, ...exampleFiles, schemaPath],
        {cwd: __dirname}
    ).return(schemaPath);
}


module.exports = {generateSchemaFromExamples};
