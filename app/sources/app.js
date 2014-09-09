'use strict';

var crmyApp = angular.module('crmy.app',
    [
        'ui.router',
        'ui.bootstrap'
    ]
);

crmyApp.config(function($stateProvider, $urlRouterProvider) {
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
