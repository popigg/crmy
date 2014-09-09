angular.module('crmy.app').controller('LoginController', ['$scope', '$http', '$location',
    function($scope, $http, $location) {

        $scope.user = {};

        $scope.login = function () {

            $http.post('http://localhost:3000/login', {
                email : $scope.user.email,
                pass  : $scope.user.pass
            })
                .success(function(data, status, headers, config){
                    $location.url('/customers');
                })
                .error(function() {
                    $location.url('/login')
                })
        }

    }
]);
