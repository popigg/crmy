'use strict';

angular.module('crmy.customer').controller('CustomerDetailsController', 
	[
		'$scope',
        '$state',
		'$stateParams',
		'CustomerService', 
		
		function($scope, $state, $stateParams, CustomerService){

			CustomerService
                    .getCustomerDetails($stateParams.id)
                    .then(function(){
                        $scope.customerInfo = CustomerService.customerInfo;                        
                    }, function(){
                       $state.go('customers');
                    });

            $scope.onClickBack = function() {
                console.log('hi');
                $state.go('customers');
            };
			
		}
	]
)