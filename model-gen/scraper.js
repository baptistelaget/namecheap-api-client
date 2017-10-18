'use strict';
global.Promise = require('bluebird');
const cp = require('child_process');
const execFile = Promise.promisify(cp.execFile);
const request = require('request-promise');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');

const trangFilename = 'trang-20091111.jar';
const cxsdPath = path.resolve('.', 'node_modules', '.bin', 'cxsd');

const definitionsDir = path.resolve(__dirname, '..', 'model');
const examplesDir = path.resolve(__dirname, 'examples');
const schemaDir = path.resolve(__dirname, 'schemas');


function parseMethodPage(methodPageURL) {
    const commandInfo = determineCommandInfoFromUrl(methodPageURL);

    request.get(methodPageURL)
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

    fs.writeFileSync(examplePath, responseExample.text());
}

function extractExampleFromHTML(html) {
    // Highly dependent on the format of the page, very likely to change.
    const $ = cheerio.load(html);
    const examples = $('pre');

    return examples.last();
}

function generateSchemaFromExamples() {
    const schemaPath = path.join(schemaDir, 'namecheap_api.xsd');

    const exampleFiles = fs.readdirSync(examplesDir);

    return execFile('java', ['-jar', trangFilename, ...exampleFiles, schemaPath], {cwd: __dirname})
        .return(schemaPath);
}

function generateDefinitionsFromSchema(schemaPath) {
    return execFile(cxsdPath, ['-t', definitionsDir, '-j', definitionsDir, `file://${schemaPath}`]);
}

saveExampleXML({group: 'domain', method: 'get-list'}, fs.readFileSync(__dirname + '/test.htm'));