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
    $urlRouterProvider.otherwise("/login");

    $stateProvider
    .state('/login', {
        url: '/login',        
        templateUrl: 'partials/auth/login.html',        
        controller: 'AuthController' 
    })

    .state('/dashboard', {
        url: '/dashboard',        
        templateUrl: 'partials/dashboard.html'        
    })

    .state('/customers', {
        url: '/customers',
        templateUrl: 'partials/customer/customerList.html',
        controller: 'CustomerController'
    })

    .state('/customerDetails/:id', {
        url: '/customerDetails/:id',
        templateUrl: 'partials/customer/customerDetails.html',
        controller: 'CustomerDetailsController'
    })
});

crmyApp.config(function($httpProvider) {
     $httpProvider.interceptors.push('AuthServiceInterceptor');
});