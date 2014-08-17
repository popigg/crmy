'use strict';

var mongoose    = require('mongoose');
var schema      = mongoose.Schema;

var customer = new schema({
    fullName                : { type: String, required: true },
    age                     : { type: Number, required: true },
    phoneNumber             : { type: Number, required: true },
    email                   : { type: Number },
    nextAppointment         : { type: schema.Types.ObjectId, ref: 'Appointment' },
    historyAppointment      : [ { type: schema.Types.ObjectId, ref: 'Appointment' } ],
    history                 : String,
    active                  : { type: Boolean, default: true },
    created_at              : { type: Date, required: true, default: Date.now },
    upadated_at             : { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model('customer', customer);