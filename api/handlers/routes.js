'use strict';

var customerController      = require('../controllers/customerController');
var appointmentController   = require('../controllers/appointmentController');
var userController          = require('../controllers/userController');
var authController          = require('../controllers/authController');

module.exports = function(router) {

    router.route('/user/:id')
        .put(authController.isAuthenticated, userController.updateUser);

    router.route('/user/create')
        .post(authController.isAuthenticated, userController.createUser);

    router.route('/login')
        .post(authController.login);

    router.route('/customer/:id')
        .get(authController.isAuthenticated, customerController.getCustomer)
        .put(authController.isAuthenticated, customerController.updateCustomer)
        .delete(authController.isAuthenticated, customerController.removeCustomer);

    router.route('/customer')
        .post(authController.isAuthenticated, customerController.createCustomer);

    router.route('/customers')
        .get(authController.isAuthenticated, customerController.getCustomers);

    router.route('/appointment/:id')
        .get(authController.isAuthenticated, appointmentController.getAppointment)
        .put(authController.isAuthenticated, appointmentController.updateAppointment)
        .delete(authController.isAuthenticated, appointmentController.removeAppointment);

    router.route('/appointment')
        .post(authController.isAuthenticated, appointmentController.createAppointment);
};
