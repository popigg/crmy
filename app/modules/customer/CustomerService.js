'use strict';

angular.module('crmy.customer').factory('CustomerService',
    [   '$http',

        function CustomerService ($http) {

            CustomerService = {};
            CustomerService.getCustomers = function() {

                return $http.get('http://localhost:3000/customers')

                    .success(function(data, status, headers, config) {
                        CustomerService.customerList = data;
                    })
                    .error(function(data, status, headers, config) {
                        console.log('error customer list controller');
                        console.log('error: ', data);
                        console.log('status: ', status);
                        console.log('headers: ', headers);
                        console.log('config: ', config);
                    });
            }

            return CustomerService;
        }
    ]
);
