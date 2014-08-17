'use strict';

var crmApp = angular.module('crm.app',
    [
        'ui.router',
        'ui.bootstrap'
    ]
);

crmApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider
    .state('logout', {
        url: '/logout',
        templateUrl: 'htdocs/templates/partials/logout.html'
    })
    .state('login', {
        url: '/login',
        templateUrl: 'htdocs/templates/partials/login.html'
    })
    .state('customerList', {
        url: '/customers',
        templateUrl: 'htdocs/templates/partials/customerList.html',
        controller: 'customerListController'
    })
});
