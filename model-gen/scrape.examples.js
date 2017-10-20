'use strict';
global.Promise = Promise = require('bluebird');
const request = require('request-promise');
const cheerio = require('cheerio');
const path = require('path');
const writeFile = Promise.promisify(require('fs').writeFile);


const examplesDir = path.resolve(__dirname, 'examples');


function parseMethodPages(methodPageURLs) {
    return Promise.map(
        methodPageURLs,
        parseMethodPage,
        {concurrency: 5}
    ).return(examplesDir);
}

function parseMethodPage(methodPageURL) {
    console.log(`Getting: ${methodPageURL}`);

    return Promise.join(
        determineCommandInfoFromURL(methodPageURL),
        request.get(methodPageURL),
        saveExampleXML
    );
}

function determineCommandInfoFromURL(url) {
    const commandFromURL = /\/([^/]+)\/([^/]+)\.aspx$/.exec(url) || [];

    const [, group = invalidMethod(url), method = invalidMethod(url)] = commandFromURL;

    return {group, method};
}

function invalidMethod(url) {
    throw Error(`Invalid method URL: ${url}`);
}

function saveExampleXML(commandInfo, html) {
    const responseExample = extractExampleFromHTML(html);

    const {group, method} = commandInfo
        , examplePath = path.join(examplesDir, `${group}_${method}.xml`);

    const sanitizedXML = sanitizeExampleXML(responseExample);

    console.log(`Saving Example: ${examplePath}`);
    return writeFile(examplePath, sanitizedXML);
}

function extractExampleFromHTML(html) {
    // Highly dependent on the format of the page, very likely to change.
    return cheerio.load(html)('pre').last().text();
}

function sanitizeExampleXML(dirtyXML) {
    // TODO HANDLE MISSING CLOSING TAG / BAD TAG NAMES
    const withMissingNamespace = dirtyXML.replace(
        '<ApiResponse Status="OK">',
        '<ApiResponse xmlns="http://api.namecheap.com/xml.response" Status="OK">'
    );
    return withMissingNamespace;
}

module.exports = {parseMethodPages};
