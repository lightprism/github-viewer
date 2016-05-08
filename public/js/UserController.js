(function() {
   var app = angular.module('githubViewer');
   
   function UserController($scope, github, $routeParams) {
      $scope.test = 'Whats up';
      
      var onUserComplete = function(data) {
         $scope.user = data;
         github.getRepos($scope.user)
            .then(onRepos, onError);
      };
      
      var onError = function(reason) {
         $scope.error = "Could not fetch the data. Try again.";
      };
      
      var onRepos = function(data) {
         $scope.repos = data;
      };
      
        $scope.username = $routeParams.username;
        $scope.repoSortOrder = "-stargazers_count";
        github.getUser($scope.username).then(onUserComplete, onError);
   }
   
   app.controller("UserController", ["$scope", "github", "$routeParams", UserController]);
}());
