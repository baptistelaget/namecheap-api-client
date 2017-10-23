'use strict';
const Cache = require('node-cache');

const ttl_s = 60 * 60 * 24;
const checkperiod_s = 60 * 10;

const tldPricingCache = new Cache({
                                      stdTTL: ttl_s,
                                      checkperiod: checkperiod_s,
                                      errorOnMissing: true
                                  });

exports.get = Promise.promisify(tldPricingCache.get);
exports.mget = Promise.promisify(tldPricingCache.mget);
exports.set = Promise.promisify(tldPricingCache.set);
