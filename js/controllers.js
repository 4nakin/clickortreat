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
    if ($cookies.game) {
        $scope.game = angular.fromJson($.cookie('game'));
    } else {
        $http.get('js/products.js').success(function(data) {
          $scope.game = {score: 0, autoclick: 0}
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

  }]).
  controller('SoundboardController', ['$scope', '$document', function($scope, $document) {
    $scope.sounds = [ {"name": "Bubbling", "mp3": "sounds/bubbling.mp3", "ogg": "sounds/bubbling.ogg" },
                      {"name": "Witch", "mp3": "sounds/cackling.mp3", "ogg": "sounds/cackling.ogg" },
                       {"name": "Spooky Door", "mp3": "sounds/doorsqueak.mp3", "ogg": "sounds/doorsqueak.ogg" },
                       {"name": "Other World", "mp3": "sounds/erieghosts.mp3", "ogg": "sounds/erieghosts.ogg" },
                       {"name": "Funny Ghost", "mp3": "sounds/ghost.mp3", "ogg": "sounds/ghost.ogg" },
                       {"name": "Lost Soul", "mp3": "sounds/lost-souls.mp3", "ogg": "sounds/lost-souls.ogg" },
                       {"name": "AaaaOww", "mp3": "sounds/loudscream.mp3", "ogg": "sounds/loudscream.ogg" },
                       {"name": "Roar", "mp3": "sounds/roar.mp3", "ogg": "sounds/roar.ogg" },
                       {"name": "Scream", "mp3": "sounds/scream.mp3", "ogg": "sounds/scream.ogg" },
                       {"name": "Warewolf", "mp3": "sounds/snarl.mp3", "ogg": "sounds/snarl.ogg" },
                       {"name": "Torture", "mp3": "sounds/tortured.mp3", "ogg": "sounds/tortured.ogg" },
                       {"name": "Violin", "mp3": "sounds/violin.mp3", "ogg": "sounds/violin.ogg" },
                       {"name": "Howl", "mp3": "sounds/wolfhowls.mp3", "ogg": "sounds/wolfhowls.ogg" }
                    ];

    $scope.halloweenPlay = function(index) {

      var audioPlayer = document.getElementById(index);
      
      audioPlayer.play();
    }
  }]);
