'use strict';
Promise = require('bluebird');
const fs = require('fs');
const path = require('path');
const cxml = require('cxml');
const ncModel = require('../model/namecheap.api');

const examplesDir = path.resolve(__dirname, 'examples');

function checkExample(exampleFile) {
    const exampleRS = fs.createReadStream(path.join(examplesDir, exampleFile));

    return new cxml.Parser().parse(exampleRS, ncModel.document)
                            .then(result => console.assert(
                                result
                                && Object.keys(result.ApiResponse.CommandResponse)
                                         .some(key => key.match(/Result|Tlds$/)),
                                `${exampleFile} is invalid`
                            ))
                            .catch(() => console.log(`${exampleFile} is invalid`));
}

const files = fs.readdirSync(examplesDir).filter(file => file.endsWith('.xml'));
Promise.map(
    files,
    file => checkExample(file)
).then(() => console.log('All good.'));
