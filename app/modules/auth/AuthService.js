'use strict';

angular.module('crmy.auth').factory('AuthService',
    [   '$http',

        function AuthService ($http) {

            AuthService.login = function(user) {

                return $http.post('http://localhost:3000/login', {
                    email : user.email,
                    pass  : user.pass
                })
                .success(function(data, status, headers, config){
                    AuthService.token = data.token;
                })
                .error(function(data, status, headers, config) {

                });
            };

            AuthService.checkToken = function(token) {
                return $http.post('http://localhost:3000/auth_token', {

                })
                .success(function(data, status, headers, config){

                })
                .error(function(data, status, headers, config) {

                })
            }

            return AuthService;
        }
    ]
);
