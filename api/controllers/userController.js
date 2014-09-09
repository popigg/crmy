'use strict';

var user   = require('../models/user');

exports.createUser = function(req, res) {
    user.create(req.body, function(error, userObj) {
        if (error) {
            res.status(501).send(error);
            return;
        }

        res.send(userObj);
    });
};

exports.getUser = function(req, res) {
    user.findOne({ email: req.body.email, pass: req.body.pass }, function(error, userObj) {
        if (error) {
            res.status(501).send(error);
            return;
        }

        res.send(userObj);
    });
};

exports.updateUser = function(req, res) {
    user.findOneAndUpdate(req.params.id, req.body, function(error, userObj){
        if (error) {
            res.status(501).send(error);
            return;
        }

        res.send(userObj);
    });
};
