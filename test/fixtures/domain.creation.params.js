'use strict';
const {randomString} = require('./utils');
const _ = require('lodash');

function buildCanadianContactDetails() {
    return {
        'FirstName': 'John Q.',
        'LastName': 'Testington',
        'Address1': '123 Fake Street',
        'Address2': 'Room 101',
        'StateProvince': 'ON',
        'PostalCode': 'H0H 0H0',
        'Country': 'CA',
        'Phone': '+1.6139924793',
        'EmailAddress': `${randomString()}@${randomString()}.com`,
        'OrganizationName': 'Test Org.',
        'City': 'Test City'
    };
}

const contactDetails = buildCanadianContactDetails();

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

function buildParams() {
    return _.merge(buildBaseParams(), requiredContactDetails);
}

module.exports = {
    buildParams
};