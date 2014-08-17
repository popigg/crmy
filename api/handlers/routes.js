'use strict';

var customerController = require('../controllers/customerController');
var appointmentController = require('../controllers/appointmentController');

module.exports = function(router) {

    router.route('/customer/:id')
        .get(customerController.getCustomer)
        .put(customerController.updateCustomer)
        .delete(customerController.removeCustomer);

    router.route('/customer')
        .post(customerController.createCustomer);

    router.route('/customers')
        .get(customerController.getCustomers);

    router.route('/appointment/:id')
        .get(appointmentController.getAppointment)
        .put(appointmentController.updateAppointment)
        .delete(appointmentController.removeAppointment);

    router.route('/appointment')
        .post(appointmentController.createAppointment);
};