'use strict';

var myApp = angular.module('myApp', ['ionic',
    'ngRoute',
    'myApp.controllers',
    'myApp.directives',
    'myApp.services',
    'myApp.filters',
    'fhcloud'
]);

myApp.config(function($routeProvider) {

    $routeProvider
        .when('/hello', {
            templateUrl: 'views/hello.html',
            controller: 'MainCtrl'
        })

    .otherwise({
        redirectTo: '/hello'
    });
});