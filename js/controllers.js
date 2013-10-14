'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('ResetController', ['$scope', '$cookies','$location', function($scope, $cookies, $location){
    $scope.resetCookie = function() {
        delete $cookies.game;
        $location.path('#/');
    }
          }]).
  controller('GhostController', ['$scope', '$http', '$cookies',function($scope, $http, $cookies) {

    $scope.game = {score: 0, autoclick: 0}
 
    if ($cookies.game) {
        $scope.game = angular.fromJson($.cookie('game'));
    } else {
        $http.get('js/products.js').success(function(data) {
          $scope.game['products'] = data;
        });
    }
    
    function setCookie() {
        $.cookie('game', angular.toJson($scope.game), {expires:365});
    }
    
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

    function saveComplete(){
        $scope.saving = false;
    }
    setInterval(function(){
        $scope.$apply(function() {
            setCookie();
            $scope.saving = true;
            setTimeout(saveComplete, 2000);
        });
    }, 60000)

    setInterval(function(){
        $scope.$apply(function() {
            addScore($scope.game.autoclick);
        });
    }, 100);

  }]);
