'use strict';
global.Promise = Promise = require('bluebird');
const cp = require('child_process');
const execFile = Promise.promisify(cp.execFile);
const request = require('request-promise');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');

const trangPath = path.relative(__dirname, 'trang-20091111.jar');
const cxsdPath = path.relative(__dirname, path.join('..', 'node_modules', '.bin', 'cxsd'));

const definitionsDir = path.resolve(__dirname, '..', 'model');
const examplesDir = path.resolve(__dirname, 'examples');
const schemaDir = path.resolve(__dirname, 'schema');

function parseMethodPages() {
    const methodURLs = require('./method_pages.json');

    Promise.map(
        methodURLs,
        parseMethodPage,
        {concurrency: 5}
    );
}

function parseMethodPage(methodPageURL) {
    console.log(`Getting: ${methodPageURL}`);
    const commandInfo = determineCommandInfoFromUrl(methodPageURL);

    return request.get(methodPageURL)
                  .then(body => saveExampleXML(commandInfo, body));
}

function determineCommandInfoFromUrl(url) {
    const commandNameRegex = /\/([^/]+)\/([^/]+)\.aspx$/;

    const [, group, method] = commandNameRegex.exec(url) || [];

    return {group, method};
}

function saveExampleXML(commandInfo, html) {
    const responseExample = extractExampleFromHTML(html);

    const {group, method} = commandInfo
        , examplePath = path.resolve(examplesDir, `${group}_${method}.xml`);

    console.log(`Saving Example: ${examplePath}`);

    const sanitizedXML = sanitizeExampleXML(responseExample.text());

    fs.writeFileSync(examplePath, sanitizedXML);
}

function sanitizeExampleXML(dirtyXML) {
    // TODO HANDLE MISSING CLOSING TAG / BAD TAG NAMES
    const withMissingNamespace = dirtyXML.replace(
        '<ApiResponse Status="OK">',
        '<ApiResponse xmlns="http://api.namecheap.com/xml.response" Status="OK">'
    );
    return withMissingNamespace;
}

function extractExampleFromHTML(html) {
    // Highly dependent on the format of the page, very likely to change.
    const $ = cheerio.load(html);
    const examples = $('pre');

    return examples.last();
}

function generateSchemaFromExamples() {
    const schemaPath = path.join(schemaDir, 'namecheap_api.xsd');

    const exampleFiles = fs.readdirSync(examplesDir)
                           .filter(file => file.endsWith('.xml'))
                           .map(file => path.join(examplesDir, file));

    return execFile('java', ['-jar', trangPath, ...exampleFiles, schemaPath], {cwd: __dirname})
        .return(schemaPath);
}

exports.generateSchemaFromExamples = generateSchemaFromExamples;

function generateDefinitionsFromSchema(schemaPath) {
    return execFile(cxsdPath, ['-t', definitionsDir, '-j', definitionsDir, `file://${schemaPath}`]);
}

exports.generateDefinitionsFromSchema = generateDefinitionsFromSchema;
