'use strict';

/* Directives */
angular.module('myApp.directives', []).
  directive('pulseAnimate', [function() {
    return function(scope, elm, attrs) {
         /*scope.$watch(attrs.pulseAnimate, function() {
            elm.animate({
                width:290,
                height:290,
            },50).animate({width:300, height:300},50);

        });*/
    };
  }]);
