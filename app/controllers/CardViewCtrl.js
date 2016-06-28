app.controller("CardViewCtrl", function($scope, $http, $routeParams, $location, firebaseURL, ScorecardFactory, AuthFactory){
  $scope.scorecards = [];
  $scope.selectedCard = {};
  let selectedCardId = $routeParams.scorecardId;


  


  $http.get(firebaseURL + "scorecards.json")
    .success(function(scorecardObject){
      var scorecardCollection = scorecardObject
      console.log("scorecardCollection", scorecardCollection);
      Object.keys(scorecardCollection).forEach(function(key){
        scorecardCollection[key].id=key;
        $scope.scorecards.push(scorecardCollection[key]);

        $scope.selectedCard = $scope.scorecards.filter(function(scorecard){
          return scorecard.id === $routeParams.scorecardId;
        })[0];
      })
    })


  $scope.deleteSingleScorecard = function(){
    ScorecardFactory.deleteSingleScorecardFromFirebase(selectedCardId).then(function(response){
      $scope.allScorecards = [];
      ScorecardFactory.getScorecardsFromFirebase().then(function(scorecardCollection){
        $scope.allScorecards = scorecardCollection;
        $location.url("scorecards/all")
      })
    })
  }












});