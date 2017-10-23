const Joi = require('joi');
const _ = require('lodash');

const optionalString = Joi.string();
const requiredString = Joi.string().required();
const requiredEmail = requiredString.email();

/**
 * https://www.namecheap.com/support/api/methods/domains/create.aspx
 */
const schemaKeys = {
    DomainName: requiredString,
    Years: Joi.number().integer().required(),
    AddFreeWhoisguard: Joi.string(),
    WGEnabled: Joi.string(),
    GenerateAdminOrderRefId: Joi.string(),
    IsPremiumDomain: Joi.boolean(),
    PremiumPrice: Joi.string(),
    EapFee: Joi.string()
};

const contactDetailKeys = {
    'FirstName': requiredString,
    'LastName': requiredString,
    'Address1': requiredString,
    'Address2': optionalString,
    'StateProvince': requiredString,
    'PostalCode': requiredString,
    'Country': requiredString,
    'Phone': requiredString,
    'EmailAddress': requiredEmail,
    'OrganizationName': optionalString,
    'City': requiredString
};

const requiredContactKeys = _.reduce(
    ['AuxBilling', 'Admin', 'Tech', 'Registrant'],
    (acc, contactType) => _.merge(acc, _.mapKeys(contactDetailKeys, (v, k) => `${contactType}${k}`)),
    {}
);

const allKeys = _.merge(schemaKeys, requiredContactKeys);

module.exports = {
    SCHEMA: Joi.object().keys(allKeys)
};
