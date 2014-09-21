'use strict';

var crmyApp = angular.module('crmy',
    [
        'ui.router',
        'ui.bootstrap',
        'ngCookies',
        'crmy.auth',
        'crmy.customer'
    ]
);

crmyApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('/', {
        url: '/',
        templateUrl: 'partials/init.html'
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