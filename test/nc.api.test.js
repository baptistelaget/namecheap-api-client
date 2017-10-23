'use strict';

const ncApi = require('../lib');
ncApi.setClient(require('./test.client'));
const resultTypes = require('../model/namecheap.api');

describe('Namecheap API', function () {

    describe('Domain Check', function () {

        it('Should result info about a domain', function () {
            const checkResult = ncApi.checkDomains('namecheap.com', 'google.com');

            checkResult.then((result) => console.log(result))

            const assertions = [
                checkResult.should.eventually.have.property('DomainCheckResult')
            ];

            return Promise.all(assertions);
        });

    });

});
