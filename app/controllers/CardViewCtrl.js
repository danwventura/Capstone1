app.controller("CardViewCtrl", function($scope, $http, $routeParams, firebaseURL, ScorecardFactory, AuthFactory){
  $scope.scorecards = [];
  $scope.selectedCard = {};
  // $scope.updatedCard = {};
  $scope.selectedCardId = $routeParams.scorecardId;

  console.log("scorecardIdrp", $routeParams.scorecardId);

  


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












});