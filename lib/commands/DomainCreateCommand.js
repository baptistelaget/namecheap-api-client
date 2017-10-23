'use strict';
const NcCommand = require('./NcCommand');
const Joi = require('joi');
const DomainCreateSchema = require('./DomainCreateSchema').SCHEMA;

/**
 * https://www.namecheap.com/support/api/methods/domains/create.aspx
 */
class DomainCreateCommand extends NcCommand {
    constructor(creationParams) {
        super(
            'namecheap.domains.create',
            Joi.attempt(creationParams, DomainCreateSchema)
        );
    }
}

module.exports = DomainCreateCommand;
