'use strict';

var appointment = require('../models/appointment');
var customer    = require('../models/customer');

exports.createAppointment = function(req, res) {
    appointment.create(req.body, function(error, date) {
        if (error) {
            res.status(501).send(error);
            return;
        }

        res.send(date);
    });
};

exports.getAppointment = function(req, res) {
    appointment.findById(req.params.id)
        .populate('customer', 'fullName phoneNumber')
        .exec(function(error, date) {
            if (error) {
                res.status(501).send(error);
                return;
            }

            res.send(date)
        });
};

exports.updateAppointment = function(req, res) {
    appointment.findOneAndUpdate(req.params.id, req.body, function(error, date){
        if (error) {
            res.status(501).send(error);
            return;
        }

        res.send(date);
    });
};

exports.removeAppointment = function(req, res) {
    appointment.findOneAndUpdate(req.params.id, { active: false } ,function(error, date){
        if (error) {
            res.status(501).send(error);
            return;
        }

        res.send(date);
    });
};