'use strict';

angular.module('crmy.customer').controller('CustomerController',
    [   '$scope',
        '$location',
        'CustomerService',

        function CustomerController ($scope, $location, CustomerService){

            CustomerService
                .getCustomers()
                .then(function(){
                    $scope.customerList = CustomerService.customerList;
                }, function(){
                   $location.url('/customers');
                });

            $scope.getCustomerDetails = function(id) {
                console.log(id);
                
                $location.url('customerDetails/' + id);
            }
        }
    ]
);
