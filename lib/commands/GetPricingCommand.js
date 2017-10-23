'use strict';
const NcCommand = require('./NcCommand');

/**
 * https://www.namecheap.com/support/api/methods/users/get-pricing.aspx
 */
class GetPricingCommand extends NcCommand {

    constructor(productType, productName = '') {
        super(
            'namecheap.users.getPricing',
            {
                ProductType: productType,
                ActionName: 'REGISTER',
                ProductName: productName.toLowerCase().replace(/[^0-9a-z]/g, '')
            }
        );
    }

}

module.exports = GetPricingCommand;
