'use strict';

angular.module('crmy.auth').controller('LoginController',
    [   '$scope',
        '$window',
        '$location',
        'AuthService',

        function AuthController ($scope,
                $window,
                $location,
                AuthService) {

            $scope.user = {};

            $scope.login = function (user) {

                AuthService
                    .login(user)
                    .then(function() {
                        $window.sessionStorage.token = AuthService.token;
                        $location.url('/customers');
                    }, function(err) {
                        $scope.valid = 'has-error has-fedback';
                        $location.url('/login');
                    });
            };
        }
    ]
);
