'use strict';

var crmyApp = angular.module('crmy',
    [
        'ui.router',
        'ngCookies',
        'crmy.auth',
        'crmy.customer'
    ]
);

crmyApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider
    .state('login', {
        url: '/login',
        views: {
            'main@' : {
                controller: 'AuthController',
                templateUrl: 'app/partials/auth/login.html'
            }
        }
    })

    .state('dashboard', {
        url: '/dashboard',
        views: {
            'main@' : {
                templateUrl: 'app/partials/dashboard.html'
            }
        }
    })

    .state('customers', {
        url: '/customers',
        views: {
            'main@' : {
                controller: 'CustomerController',
                templateUrl: 'app/partials/customer/customerList.html'
            }
        }
    })

    .state('customerDetails', {
        url: '/customerDetails/:id',
        views : {
            'main@' : {
                controller: 'CustomerDetailsController',
                templateUrl: 'app/partials/customer/customerDetails.html'
            }
        }
    })
});

crmyApp.config(function($httpProvider) {
     $httpProvider.interceptors.push('AuthServiceInterceptor');
});