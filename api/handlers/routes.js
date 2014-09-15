'use strict';

var customerController      = require('../controllers/customerController');
var appointmentController   = require('../controllers/appointmentController');
var userController          = require('../controllers/userController');
var authController          = require('../controllers/authController');
var authMiddleware          = require('../middlewares/authMiddleware');

module.exports = function(router, passport) {

    router.route('/user/:id')
        .put(authMiddleware.isAuthenticated, userController.updateUser);

    router.route('/user/create')
        .post(authMiddleware.isAuthenticated, userController.createUser);

    router.route('/login')
        .post(authController.login);

    router.route('/customer/:id')
        .get(authMiddleware.isAuthenticated, customerController.getCustomer)
        .put(authMiddleware.isAuthenticated, customerController.updateCustomer)
        .delete(authMiddleware.isAuthenticated, customerController.removeCustomer);

    router.route('/customer')
        .post(authMiddleware.isAuthenticated, customerController.createCustomer);

    router.route('/customers')
        .get(authMiddleware.isAuthenticated, customerController.getCustomers);

    router.route('/appointment/:id')
        .get(authMiddleware.isAuthenticated, appointmentController.getAppointment)
        .put(authMiddleware.isAuthenticated, appointmentController.updateAppointment)
        .delete(authMiddleware.isAuthenticated, appointmentController.removeAppointment);

    router.route('/appointment')
        .post(authMiddleware.isAuthenticated, appointmentController.createAppointment);
};
