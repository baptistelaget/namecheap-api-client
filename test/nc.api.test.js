'use strict';
const ncApi = require('./test.api');
const domainCreationParams = require('./fixtures/domain.creation.params');
const {randomString} = require('./fixtures/utils');

/** Careful! These actually hit the Namecheap sandbox */

describe('Namecheap API', function () {

    xdescribe('Domain Check', function () {

        it('Should result info about a domain', function () {
            const checkResult = ncApi.checkDomains('namecheap.com', 'google.com');

            const assertions = [
                checkResult.should.eventually.have.property('DomainCheckResult').that.has.lengthOf(2)
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
                                   pricingResult.should.eventually.have.property('Type'),
                                   pricingResult.should.eventually.have.property('UserGetPricingResult')
                                       .that.has.property('ProductType')
                               ]);
        });

    });


    xdescribe('Create Domain', function () {

        it('Creates a Canadian domain', function () {

            const creationParams = domainCreationParams.buildParams();
            creationParams.DomainName = `${randomString()}.ca`;

            const extendedAttributes = {
                CIRALegalType: 'RES',
                CIRAWhoisDisplay: 'Private',
                CIRALanguage: 'en'
            };

            const canadianDomainRegistrationParams = Object.assign(creationParams, extendedAttributes);

            const domainCreationResult = ncApi.createDomain(canadianDomainRegistrationParams);

            domainCreationResult.then(result => console.log(result));

            return domainCreationResult.should.eventually.have.property('DomainCreateResult');
        });

    });

});
