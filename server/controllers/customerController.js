'use strict';

var customer   = require('../models/customer');
var appointment  = require('../models/appointment');


exports.createCustomer = function(req, res) {
    customer.create(req.body, function(error, client) {
        if (error) {
            res.status(501).send(error);
            return;
        }

        res.send(client);
    });
};

exports.getCustomer = function(req, res) {
    customer.findById(req.params.id)
        .populate('appointment')
        .exec(function(error, client) {
            if (error) {
                res.status(501).send(error);
                return;
            }

            res.send(client)
        });
};

exports.updateCustomer = function(req, res) {
    customer.findOneAndUpdate(req.params.id, req.body, function(error, client){
        if (error) {
            res.status(501).send(error);
            return;
        }

        res.send(client);
    });
};

exports.removeCustomer = function(req, res) {
    customer.findOneAndUpdate(req.params.id, { active: false } ,function(error, client){
        if (error) {
            res.status(501).send(error);
            return;
        }

        res.send(client);
    });
};

exports.getCustomers = function(req, res) {
    customer.find({ active: true }, function(error, clients) {
        if (error) {
            res.status(501).send(error);
            return;
        }

        res.send(clients);
    });
};
