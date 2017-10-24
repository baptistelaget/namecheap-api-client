'use strict';
global.Promise = Promise = require('bluebird');
const execFile = Promise.promisify(require('child_process').execFile);
const path = require('path');

const root = path.resolve(__dirname, '..');
const cxsdPath = path.resolve(root, 'node_modules', '.bin', 'cxsd');
const definitionsDir = path.resolve(root, 'model');


function generateDefinitionsFromSchema(schemaPath) {
    return execFile(
        cxsdPath,
        ['-t', definitionsDir, '-j', definitionsDir, `file://${path.relative(root, schemaPath)}`],
        {cwd: root}
    ).return(definitionsDir);
}

module.exports = {generateDefinitionsFromSchema};

generateDefinitionsFromSchema('./schema/namecheap.api.xsd');
