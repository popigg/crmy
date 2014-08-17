angular.module('crm.app').controller('customerListController',['$scope', '$http', function($scope, $http){

    $http.get('http://localhost:3000/customers')
        .success(function(data, status, headers, config) {
            console.log(data);
            $scope.customerList = data;
        })
        .error(function(data, status, headers, config) {
            console.log('error: ', data);
            console.log('status: ', status);
            console.log('headers: ', headers);
            console.log('config: ', config);
        })
}]);
