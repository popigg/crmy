'use strict';

var mongoose    = require('mongoose');
var schema      = mongoose.Schema;

var appointment = new schema({
    customer                : { type: schema.Types.ObjectId, ref: 'customer'},
    date                    : Date,
    customerSatisfaction    : Number, // todo: validation 1 -10
    companySatisfaction     : Number, // todo: validation 1 -10
    comments                : String,
    service                 : String,
    created_at              : { type: Date, required: true, default: Date.now },
    upadated_at             : { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model('appointment', appointment);