'use strict';

var crmyApp = angular.module('crmy',
    [
        'ui.router',
        'ui.bootstrap',
        'crmy.auth',
        'crmy.customer'
    ]
);

crmyApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider
    .state('logout', {
        url: '/logout',
        templateUrl: 'partials/auth/logout.html'
    })
    .state('login', {
        url: '/login',
        templateUrl: 'partials/auth/login.html',
        controller: 'LoginController'
    })
    .state('customerList', {
        url: '/customers',
        templateUrl: 'partials/customer/customerList.html',
        controller: 'CustomerController'
    })
});

crmyApp.config(function($httpProvider) {
     $httpProvider.interceptors.push('AuthServiceInterceptor');
});