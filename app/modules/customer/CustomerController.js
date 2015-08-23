'use strict';

angular.module('crmy.customer').controller('CustomerController',
    [   '$scope',
        '$location',
        'CustomerService',

        function CustomerController($scope, $location, CustomerService){

            init();

            $scope.getCustomerDetails = function(id) {
                $location.url('customerDetails/' + id);
            };

            $scope.createNewCustomer = function(customer) {

                if(!customer) {
                    customer = {
                        fullName    : 'Julia rodriguez',
                        age         : '34',
                        phoneNumber : '564234755',
                        email       : 'juliarr@gmail.com'
                    };
                }

                CustomerService
                    .createNewCustomer(customer)
                    .then(function(customer) {
                        // todo: push customer into customerList

                        console.log(customer);
                    }, function(){

                    });
            };

            //////////////

            function init() {
                CustomerService
                    .getCustomers()
                    .then(function(){
                        $scope.customerList = CustomerService.customerList;
                    }, function(){
                        $location.url('/login');
                    });
            }


        }
    ]
);
