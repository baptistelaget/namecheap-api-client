'use strict';
const domainCreationParams = require('./fixtures/domain.creation.params');
const {randomString} = require('./fixtures/utils');


const dcSchema = require('../lib/commands/DomainCreateSchema');


describe('Domain Creation', function () {

    it('Accepts params without extended attributes for a non .ca domain', function () {
        const creationParams = domainCreationParams.buildParams();

        const result = dcSchema.SCHEMA.validate(creationParams);

        should.not.exist(result.error);
        Object.keys(creationParams).should.deep.equal(Object.keys(result.value));
    });

    it('Rejects params without extended attributes for a .ca domain', function () {
        const creationParams = domainCreationParams.buildParams();
        creationParams.DomainName = `${randomString()}.ca`;

        const result = dcSchema.SCHEMA.validate(creationParams);

        should.exist(result.error);
    });

    it('Accepts params with extended attributes for a .ca domain', function () {
        const creationParams = domainCreationParams.buildParams();
        creationParams.DomainName = `${randomString()}.ca`;

        const extendedParams = {
            CIRALegalType: 'RES',
            CIRAWhoisDisplay: 'Private',
            CIRAAgreementVersion: '2.0',
            CIRAAgreementValue: 'Y',
            CIRALanguage: 'en'
        };

        const result = dcSchema.SCHEMA.validate(Object.assign(creationParams, extendedParams));

        should.not.exist(result.error);
        Object.keys(creationParams).should.deep.equal(Object.keys(result.value));
    });


    it('Fills in default params of extended attributes for a .ca domain', function () {
        const creationParams = domainCreationParams.buildParams();
        creationParams.DomainName = `${randomString()}.ca`;

        const extendedParams = {
            CIRALegalType: 'RES',
            CIRAWhoisDisplay: 'Private',
            CIRALanguage: 'en'
        };

        const result = dcSchema.SCHEMA.validate(Object.assign(creationParams, extendedParams));

        should.not.exist(result.error);
        result.value.should.have.property('CIRAAgreementVersion', '2.0');
        result.value.should.have.property('CIRAAgreementValue', 'Y');
    });


    it('Rejects extended params with extended attributes for a non .ca domain', function () {
        const creationParams = domainCreationParams.buildParams();

        const extendedParams = {
            CIRALegalType: 'RES',
            CIRAWhoisDisplay: 'Private',
            CIRAAgreementVersion: '2.0',
            CIRAAgreementValue: 'Y',
            CIRALanguage: 'en'
        };

        const result = dcSchema.SCHEMA.validate(Object.assign(creationParams, extendedParams));

        should.exist(result.error);
    });

});
