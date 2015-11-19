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
                        fullName    : 'Jose Perez',
                        age         : '46',
                        phoneNumber : '87833737',
                        email       : 'joseper@gmail.com'
                    };
                }

                CustomerService
                    .createNewCustomer(customer)
                    .then(function(customer) {
                        console.log(customer);
                        $scope.customerList.push(customer.data);
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
