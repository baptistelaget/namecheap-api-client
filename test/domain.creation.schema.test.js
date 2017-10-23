'use strict';
const _ = require('lodash');

function randomString() {
    return Math.random().toString(36).slice(2);
}

function buildContactDetails() {
    return {
        'FirstName': 'Test',
        'LastName': 'User',
        'Address1': '123 Fake Street',
        'Address2': 'Room 101',
        'StateProvince': 'Nunavut',
        'PostalCode': 'H0H0H0',
        'Country': 'Canada',
        'Phone': '555.5555555',
        'EmailAddress': `${randomString()}@${randomString()}.com`,
        'OrganizationName': 'Test Org.',
        'City': 'Test City'
    };
}

const contactDetails = buildContactDetails();

const requiredContactDetails = _.reduce(
    ['AuxBilling', 'Admin', 'Tech', 'Registrant'],
    (acc, contactType) => _.merge(acc, _.mapKeys(contactDetails, (v, k) => `${contactType}${k}`)),
    {}
);

function buildBaseParams() {
    return {
        'DomainName': randomString() + '.com',
        'Years': '1'
    };
}


const dcSchema = require('../lib/commands/DomainCreateSchema');


describe('Domain Creation', function () {

    it('Accepts params without extended attributes for a non .ca domain', function () {
        const creationParams = _.merge(buildBaseParams(), requiredContactDetails);

        const result = dcSchema.SCHEMA.validate(creationParams);

        should.not.exist(result.error);
        Object.keys(creationParams).should.deep.equal(Object.keys(result.value));
    });

    it('Rejects params without extended attributes for a .ca domain', function () {
        const creationParams = _.merge(buildBaseParams(), requiredContactDetails);
        creationParams.DomainName = `${randomString()}.ca`;

        const result = dcSchema.SCHEMA.validate(creationParams);

        should.exist(result.error);
    });

    it('Accepts params with extended attributes for a .ca domain', function () {
        const creationParams = _.merge(buildBaseParams(), requiredContactDetails);
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
        const creationParams = _.merge(buildBaseParams(), requiredContactDetails);
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
        const creationParams = _.merge(buildBaseParams(), requiredContactDetails);

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
