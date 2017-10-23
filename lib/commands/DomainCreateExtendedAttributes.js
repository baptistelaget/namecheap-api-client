'use strict';
const Joi = require('joi');
const _ = require('lodash');

/**
 * https://www.namecheap.com/support/api/extended-attributes.aspx
 *
 * TODO ADD MORE THAN .CA
 */
const dotCaAttributeKeys = {
    CIRALegalType: Joi.string()
                      .valid([
                                 'CCO',
                                 'CCT',
                                 'RES',
                                 'GOV',
                                 'EDU',
                                 'ASS',
                                 'HOP',
                                 'PRT',
                                 'TDM',
                                 'TRD',
                                 'PLT',
                                 'LAM',
                                 'TRS',
                                 'ABO',
                                 'INB',
                                 'LGR',
                                 'OMK',
                                 'MAJ'
                             ]),
    CIRAWhoisDisplay: Joi.string().valid('Full', 'Private'), // TODO ADD PER-LegalType RESTRICTIONS
    CIRAAgreementVersion: Joi.string().valid('2.0').default('2.0'),
    CIRAAgreementValue: Joi.string().valid('Y').default('Y'),
    CIRALanguage: Joi.string().valid('en', 'fr').default('en')
};

const conditionalDotCaAttributeKeys = _.mapValues(dotCaAttributeKeys, (schema) => {
    return schema.when('DomainName', {
        is: Joi.string().regex(/\.ca$/).required(),
        then: schema._flags.default ? Joi.empty(null) : Joi.required(),
        otherwise: Joi.forbidden().strip()
    });
});

module.exports = {
    SCHEMA: Joi.object().keys(conditionalDotCaAttributeKeys)
};
