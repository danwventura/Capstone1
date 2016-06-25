app.controller("AllCardsCtrl", function($scope, $http, $location, ScorecardFactory){
  
  $scope.title = "Scorebook";
  $scope.allScorecards = [];

  ScorecardFactory.getScorecardsFromFirebase().then(function(scorecardCollection){
    console.log("scorecardCollectionFromPromise", scorecardCollection);
    $scope.allScorecards = scorecardCollection;
  })
  
})