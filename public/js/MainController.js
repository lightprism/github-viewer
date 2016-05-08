(function() {
   var app = angular.module('githubViewer');
   
   function MainController($scope, $interval, $location) {
      
      $scope.search = function(username) {
         if(countdownInterval) {
            $interval.cancel(countdownInterval);
            $scope.countdown = null;
         }
         $location.path("/user/" + username);
      };
      
      var decrementCount = function() {
         $scope.countdown -= 1;
         if($scope.countdown < 1) {
            $scope.search($scope.username);
            
         }
      };
      var countdownInterval = null;
      var startCountdown = function() {
         countdownInterval = $interval(decrementCount, 1000, $scope.countdown);
      };
      
      $scope.username = 'angular';
      $scope.countdown = 5;
      startCountdown();
   }
   
   app.controller("MainController", ["$scope", "$interval", "$location", MainController]);
}());
