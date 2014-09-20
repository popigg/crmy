'use strict';

angular.module('crmy.auth').controller('LoginController',
    [   '$scope',
        '$location',
        '$cookieStore',
        'AuthService',

        function AuthController ($scope,
                $location,
                $cookieStore,
                AuthService) {

            $scope.user = {};

            $scope.login = function (user) {

                AuthService
                    .login(user)
                    .then(function() {
                        $cookieStore.put('auth_token', AuthService.token);
                        $location.url('/customers');
                    }, function(err) {
                        $scope.valid = 'has-error has-fedback';
                        $location.url('/login');
                    });
            };
        }
    ]
);
