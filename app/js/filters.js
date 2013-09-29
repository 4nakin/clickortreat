'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('chopdecimal', function() {
    return function(score) {
      return Math.floor(score);
    }
  });
