'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngCookies', 'myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
    config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/game', {templateUrl: 'partials/game.html', controller: 'GhostController'});
            $routeProvider.when('/about', {templateUrl: 'partials/about.html'});
            $routeProvider.otherwise({redirectTo: '/game'});
            }]);
