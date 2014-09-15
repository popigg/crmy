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
                   $location.url('/login');
                });
        }
    ]
);
