'use strict';
const Joi = require('joi');
const _ = require('lodash');
const extendedAttributesSchema = require('./DomainCreateExtendedAttributes').SCHEMA;

const optionalString = Joi.string();
const requiredString = Joi.string().required();
const requiredEmail = requiredString.email();

/**
 * https://www.namecheap.com/support/api/methods/domains/create.aspx
 */
const schemaKeys = {
    DomainName: requiredString,
    Years: Joi.number().integer().greater(0).less(99).required(),
    AddFreeWhoisguard: Joi.string(),
    WGEnabled: Joi.string(),
    GenerateAdminOrderRefId: Joi.string(),
    IsPremiumDomain: Joi.boolean(),
    PremiumPrice: Joi.string(),
    EapFee: Joi.string()
};

const contactDetailKeys = {
    'FirstName': requiredString.max(255),
    'LastName': requiredString.max(255),
    'Address1': requiredString.max(255),
    'Address2': optionalString.max(255),
    'StateProvince': requiredString.max(50),
    'PostalCode': requiredString.max(50),
    'Country': requiredString.max(50),
    'Phone': requiredString.max(50),
    'EmailAddress': requiredEmail.max(255),
    'OrganizationName': optionalString.max(255),
    'City': optionalString.max(50)
};

const requiredContactKeys = _.reduce(
    ['AuxBilling', 'Admin', 'Tech', 'Registrant'],
    (acc, contactType) => _.merge(acc, _.mapKeys(contactDetailKeys, (v, k) => `${contactType}${k}`)),
    {}
);

const allKeys = _.merge(schemaKeys, requiredContactKeys);

module.exports = {
    allKeys,
    SCHEMA: Joi.object().keys(allKeys).concat(extendedAttributesSchema)
};
