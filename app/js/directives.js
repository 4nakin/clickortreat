'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('pulseAnimate', [function() {
    return function(scope, elm, attrs) {
         scope.$watch(attrs.pulseAnimate, function() {
            //elm.addClass("pulse animated").delay(5000000).addClass("bing");
            //elm.toggleClass("animated pulse").delay(500).toggleClass("animated pulse");
            console.log("hi");
            elm.animate({
                width:290,
                height:290,
            },50).animate({width:300, height:300},50);

        });
    };
  }])
  .directive('mouseClickDown', [function() {
    return function(scope, element) {
        element.bind("mousedown", function() {
console.log("down");
            element.addClass("pulse animated");
        });
    };
  }])
  .directive('mouseClickUp', [function() {
    return function(scope, element) {
        element.bind("mouseup", function() {
console.log("up");
            element.removeClass("pulse animated");
        });
    };
  }]);
