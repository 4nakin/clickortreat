'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('GhostController', ['$scope',function($scope) {
    var WITCH_PRICE = 20;
    $scope.game = {'score': 0, 'witches': 0, 'autoincrementpersecond': 0}

    $scope.pulseToggle = false
    
    function addScore(amount){
        $scope.game['score'] += amount; //= $scope.game['score'] + 1
    }

    function subtractScore(price) {
        $scope.game['score'] = $scope.game['score'] - price
    }
    function changePulse(){
        $scope.$apply(function(){$scope.pulse = !$scope.pulse;});
    }
    $scope.clickGhost = function(){
        $scope.pulseToggle = !$scope.pulseToggle
        addScore(1);
    }
    $scope.clickWitch = function() {
        if ($scope.game['score'] > WITCH_PRICE) {
            subtractScore(WITCH_PRICE);
            $scope.game['witches'] += 1;
            $scope.game['autoincrementpersecond'] += 0.1;
        }
    }




    setInterval(function(){
        $scope.$apply(function() {
            addScore($scope.game['autoincrementpersecond']);
        });
    }, 1000);

  }]);