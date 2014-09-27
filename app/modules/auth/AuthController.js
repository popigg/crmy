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

            var token = $cookieStore.get('auth_token');

            if (token !== null) {
                AuthService
                    .checkToken(token)
                    .then(function() {                                                                
                        $location.url('/dashboard');

                        console.log('authen');
                    }, function() {                                                
                        $location.url('/');

                        console.log('no authen');
                    });

            }

            $scope.login = function (user) {
                AuthService
                    .login(user)
                    .then(function() {                        
                        $cookieStore.put('auth_token', AuthService.token);                                                                                                                
                        $location.url('/dashboard');

                        console.log('login');
                    }, function(err) {
                        $scope.valid = 'has-error has-fedback';                       
                        $location.url('/');

                        console.log('no login');
                    });
            };

            
        }
    ]
);
