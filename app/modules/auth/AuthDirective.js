'use strict';

angular.module('crmy.auth').directive('loginForm',
    function(){
        return {
            restrict: 'E',
            controller: 'AuthController',
            templateUrl: 'partials/auth/login.html'
        }
    }
);
