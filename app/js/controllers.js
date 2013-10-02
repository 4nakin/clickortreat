'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('GhostController', ['$scope',function($scope) {

    $scope.game = {score: 0, autoclick: 0}
    $scope.game['products'] = [ {name: 'Witch', image:'img/witch_thumb.png', price:13, bought:0, persecond: 0.1, increase: 0.5},
                                {name: 'Pumpkin', image:'img/pumpkin_thumb.png', price:66, bought:0, persecond: 1, increase: 0.42},
                                {name: 'Scarecrow', image:'img/scarecrow_thumb.png', price:132, bought:0, persecond: 10, increase: 0.4},
                                {name: 'Cat', image:'img/cat_thumb.png', price:666, bought:0, persecond: 50, increase: 0.38},
                                {name: 'Coffin', image:'img/coffin_thumb.png', price:1408, bought:0, persecond: 132, increase: 0.33},
                                {name: 'Wolf', image:'img/wolf_thumb.png', price:132000, bought:0, persecond: 300, increase: 0.4},
                                {name: 'Tombstone', image:'img/tombstone_thumb.png', price:666013, bought:0, persecond: 9000, increase: 0.59},
                                {name: 'Mummy', image:'img/mummy_thumb.png', price:6666666, bought:0, persecond: 15000, increase: 0.6},
                                {name: 'Bat', image:'img/bat_thumb.png', price:13313131, bought:0, persecond: 200000, increase: 0.45},
                                {name: 'Spider Web', image:'img/spider_web_thumb.png', price:66666666, bought:0, persecond: 500000, increase: 0.59},
                                {name: 'Skeleton', image:'img/skeleton_thumb.png', price:313131313, bought:0, persecond: 666666, increase: 0.7},
                                {name: 'Haunted House', image:'img/haunted_house_thumb.png', price:6666666666, bought:0, persecond: 1000000, increase: 0.6}
                               ]

    $scope.pulseToggle = false
    
    function addScore(amount){
        $scope.game['score'] += amount; //= $scope.game['score'] + 1
    }

    function subtractScore(price) {
        $scope.game['score'] = $scope.game['score'] - price
    }

    function incrementAutoclick(adder) {
        $scope.game.autoclick += adder / 10;
    }

    $scope.clickGhost = function(){
        $scope.pulseToggle = !$scope.pulseToggle
        addScore(1);
    }

     $scope.clickProduct = function(product) {
        if ($scope.game.score >= product.price) {
            subtractScore(product.price);
            incrementAutoclick(product.persecond);

            product.bought += 1;
            product.price += Math.floor(product.price * product.increase)
        }
    }


    setInterval(function(){
        $scope.$apply(function() {
            addScore($scope.game['autoclick']);
        });
    }, 100);

  }]);