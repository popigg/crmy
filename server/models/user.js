'use strict';

var mongoose    = require('mongoose');
var schema      = mongoose.Schema;

var user = new schema({
    email                   : { type: String, required: true },
    pass                    : { type: String, required: true },
    active                  : { type: Boolean, default: true },
    created_at              : { type: Date, required: true, default: Date.now },
    upadated_at             : { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model('user', user);
