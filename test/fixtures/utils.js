'use strict';
const _ = require('lodash');

exports.randomString = function () {
    return Math.random().toString(36).slice(2);
};
