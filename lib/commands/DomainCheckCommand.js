'use strict';
const NcCommand = require('./NcCommand');

class DomainCheckCommand extends NcCommand {

    constructor(domains) {
        super(
            'namecheap.domains.check',
            {
                DomainList: domains
            }
        );
    }

}

module.exports = DomainCheckCommand;
