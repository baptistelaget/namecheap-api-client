'use strict';
const fs = require('fs');
const path = require('path');
const parser = require('../model/namecheap.api.parser');

describe('API Response Parser', function () {

    xit('Handles unrecognized properties', function () {
        const readStream = fs.createReadStream(path.resolve(__dirname,
                                                            '..',
                                                            'model-gen',
                                                            'samples',
                                                            'error_namecheap.domains.getinfo.xml'
        ));

        return parser.parse(readStream);
    });

});
