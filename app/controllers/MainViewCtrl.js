app.controller("MainViewCtrl", function($scope, $location){


  $scope.toWeather = function (){
    $location.url("/weather/zip");
  }
  $scope.toNewScorecard = function (){
    $location.url("/scorecards/new");
  }
  $scope.toAllScorecards = function (){
    $location.url("/scorecards/all");
  }
  $scope.toStats = function (){
    $location.url("/stats");
  }

  
})