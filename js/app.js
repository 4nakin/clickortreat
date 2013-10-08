'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngCookies', 'myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
    config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/game', 
                {templateUrl: 'partials/game.html', 
                 title: 'Game',
                 controller: 'GhostController'});
            $routeProvider.when('/about', 
                {templateUrl: 'partials/about.html',
                 title: 'About'});
            $routeProvider.otherwise({redirectTo: '/game'});
            }]).
    run(['$location', '$rootScope', function($location, $rootScope) {
            $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
                    if (current.$$route) {
                        $rootScope.title = current.$$route.title;
                    }
                });
            }]);
