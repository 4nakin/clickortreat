'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('GhostController', ['$scope',function($scope) {
    $scope.game = {'score': 0}
    $scope.pulseToggle = false
    function addScore(){
        $scope.game['score'] = $scope.game['score'] + 1
    }
    function changePulse(){
        $scope.$apply(function(){$scope.pulse = !$scope.pulse;});
    }
    $scope.clickGhost = function(){
        $scope.pulseToggle = !$scope.pulseToggle
        addScore();
    }
  }]);