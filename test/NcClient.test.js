'use strict';

const client = require('./test.client');

client.executeCommand('namecheap.domains.getInfo', {DomainName: 'www.namecheap.com'})
      .then(result => console.log(result));
