'use strict';

angular.module('crmy.auth').controller('AuthController',
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
                    }, function(err) {
                        $scope.valid = 'has-error has-fedback';
                    });
            };
        }
    ]
);
