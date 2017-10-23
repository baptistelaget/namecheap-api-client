'use strict';

const ncApi = require('../lib');
ncApi.setClient(require('./test.client'));

describe('Namecheap API', function () {

    xdescribe('Domain Check', function () {

        it('Should result info about a domain', function () {
            const checkResult = ncApi.checkDomains('namecheap.com', 'google.com');

            checkResult.then((result) => console.log(result));

            const assertions = [
                checkResult.should.eventually.have.property('DomainCheckResult')
            ];

            return Promise.all(assertions);
        });

    });

    describe('Get Pricing', function () {
        let timeToGetFromAPI = Number.MAX_SAFE_INTEGER;

        it('Returns info from API on first time', function () {
            let time = Date.now();

            const pricingResult = ncApi.getDomainRegistrationPrice('.ca');

            pricingResult.then(() => timeToGetFromAPI = (Date.now() - time));

            return pricingResult.should.eventually.have.property('UserGetPricingResult');
        });

        it('Returns info from cache', function () {
            let time = Date.now();

            const pricingResult = ncApi.getDomainRegistrationPrice('.ca');

            return Promise.all([
                                   pricingResult.then(() => (Date.now() - time).should.be.lessThan(timeToGetFromAPI)),
                                   pricingResult.should.eventually.have.property('UserGetPricingResult')
                               ]);
        });

    });

});
