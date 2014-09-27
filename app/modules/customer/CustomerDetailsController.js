'use strict';

angular.module('crmy.customer').controller('CustomerDetailsController', 
	[
		'$scope',
		'$stateParams',
		'CustomerService', 
		
		function($scope, $stateParams, CustomerService){			

			CustomerService
                    .getCustomerDetails($stateParams.id)
                    .then(function(){
                        $scope.customerInfo = CustomerService.customerInfo;                        
                    }, function(){
                       $location.url('/customers');
                    });
			
		}
	]
)