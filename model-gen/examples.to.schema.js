'use strict';
global.Promise = Promise = require('bluebird');
const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const execFile = Promise.promisify(require('child_process').execFile);
const readdir = Promise.promisify(fs.readdir);


const schemaPath = path.resolve(__dirname, 'schema', 'namecheap.api_sampled.xsd');

//TODO RECOMPILE TRANG TO USE CONTENT INSTEAD OF MIXED TYPES.
const trangPath = path.resolve(__dirname, 'trang-20091111.jar');


function _findExamplesInDir(dir) {
    return readdir(dir).then(files => files.filter(file => file.endsWith('.xml'))
                                           .map(file => path.join(dir, file)));
}

function _enumerateFiles(...examplesDirs) {
    return Promise.map(examplesDirs, _findExamplesInDir)
                  .then(files => _.flattenDeep(files));
}

function generateSchemaFromExamples(...examplesDirs) {
    return _enumerateFiles(...examplesDirs)
        .then(exampleFiles => execFile('java', ['-jar', trangPath, ...exampleFiles, schemaPath], {cwd: __dirname}))
        .return(schemaPath);
}

module.exports = {generateSchemaFromExamples};

generateSchemaFromExamples('./samples', './examples');