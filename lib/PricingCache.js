'use strict';
const Cache = require('node-cache');

const ttl_s = 60 * 60 * 24;
const checkperiod_s = 60 * 10;

const tldPricingCache = new Cache({
                                      stdTTL: ttl_s,
                                      checkperiod: checkperiod_s,
                                      errorOnMissing: true
                                  });

exports.get = function (key) {
    return new Promise(
        (resolve, reject) => {
            tldPricingCache.get(
                key,
                (err) => err ? reject(err) : resolve(value)
            );
        }
    );
};
exports.set = function (key, value) {
    return new Promise(
        (resolve, reject) => {
            tldPricingCache.set(
                key,
                value,
                ttl_s,
                (err) => err ? reject(err) : resolve(value)
            );
        }
    );
};
