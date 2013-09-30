'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('GhostController', ['$scope',function($scope) {

    $scope.game = {score: 0, autoclick: 0}
    $scope.game['products'] = [{name:'witches', image:'img/witch_thumb.png', price:20, bought:0, persecond: 0.1},
                                {name: 'pumpkins', image:'img/pumpkin_thumb.png', price:50, bought:0, persecond: 1}]

    $scope.pulseToggle = false
    
    function addScore(amount){
        $scope.game['score'] += amount; //= $scope.game['score'] + 1
    }

    function subtractScore(price) {
        $scope.game['score'] = $scope.game['score'] - price
    }

    $scope.clickGhost = function(){
        $scope.pulseToggle = !$scope.pulseToggle
        addScore(1);
    }

     $scope.clickProduct = function(product) {
        if ($scope.game.score >= product.price) {
            subtractScore(product.price);
            product.bought += 1;
            product.price += Math.floor(product.price * 10/100)
            $scope.game.autoclick += product.persecond;
        }
    }


    setInterval(function(){
        $scope.$apply(function() {
            addScore($scope.game['autoclick']);
        });
    }, 1000);

  }]);