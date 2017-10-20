'use strict';
global.Promise = Promise = require('bluebird');
const request = require('request-promise');
const cheerio = require('cheerio');
const path = require('path');
const writeFile = Promise.promisify(require('fs').writeFile);


const commandsDir = path.resolve(__dirname, 'commands');


function parseMethodPages(methodPageURLs) {
    return Promise.map(
        methodPageURLs,
        parseMethodPage,
        {concurrency: 5}
    ).return(commandsDir);
}

function parseMethodPage(methodPageURL) {
    console.log(`Getting: ${methodPageURL}`);

    return Promise.join(
        determineCommandInfoFromURL(methodPageURL),
        request.get(methodPageURL),
        saveExampleRequest
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

function saveExampleRequest(commandInfo, html) {
    const requestExample = extractRequestFromHTML(html);

    const {group, method} = commandInfo
        , examplePath = path.join(commandsDir, `${group}_${method}.json`);

    console.log(`Saving Example: ${examplePath}`);
    return writeFile(examplePath, JSON.stringify(requestExample));
}

function extractRequestFromHTML(html) {
    // Highly dependent on the format of the page, very likely to change.
    return cheerio.load(html)('pre').first().text();
}

module.exports = {parseMethodPages};

parseMethodPages(require('./method_pages.json'));
