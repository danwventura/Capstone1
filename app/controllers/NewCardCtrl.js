app.controller("NewCardCtrl", function($scope, $location, ScorecardFactory){

$scope.title = "New Scorecard"

$scope.newCard = {
  roundDate:"",
  roundCourse: "",
  courseRating: "",
  courseSlope: "",
  courseHandicap: "",
  holeOneScore:"",
  holeOneFairway: "",
  holeOnePutts: "",
  holeOneNotes: "",
  holeTwoScore:"",
  holeTwoFairway: "",
  holeTwoPutts: "",
  holeTwoNotes: "",
  holeThreeScore:"",
  holeThreeFairway: "",
  holeThreePutts: "",
  holeThreeNotes: "",
  holeFourScore:"",
  holeFourFairway: "",
  holeFourPutts: "",
  holeFourNotes: "",
  holeFiveScore:"",
  holeFiveFairway: "",
  holeFivePutts: "",
  holeFiveNotes: "",
  holeSixScore:"",
  holeSixFairway: "",
  holeSixPutts: "",
  holeSixNotes: "",
  holeSevenScore:"",
  holeSevenFairway: "",
  holeSevenPutts: "",
  holeSevenNotes: "",
  holeEightScore:"",
  holeEightFairway: "",
  holeEightPutts: "",
  holeEightNotes: "",
  holeNineScore:"",
  holeNineFairway: "",
  holeNinePutts: "",
  holeNineNotes: "",
  holeTenScore:"",
  holeTenFairway: "",
  holeTenPutts: "",
  holeTenNotes: "",
  holeElevenScore:"",
  holeElevenFairway: "",
  holeElevenPutts: "",
  holeElevenNotes: "",
  holeTwelveScore:"",
  holeTwelveFairway: "",
  holeTwelvePutts: "",
  holeTwelveNotes: "",
  holeThirteenScore:"",
  holeThirteenFairway: "",
  holeThirteenPutts: "",
  holeThirteenNotes: "",
  holeFourteenScore:"",
  holeFourteenFairway: "",
  holeFourteenPutts: "",
  holeFourteenNotes: "",
  holeFifteenScore:"",
  holeFifteenFairway: "",
  holeFifteenPutts: "",
  holeFifteenNotes: "",
  holeSixteenScore:"",
  holeSixteenFairway: "",
  holeSixteenPutts: "",
  holeSixteenNotes: "",
  holeSeventeenScore:"",
  holeSeventeenFairway: "",
  holeSeventeenPutts: "",
  holeSeventeenNotes: "",
  holeEighteenScore:"",
  holeEighteenFairway: "",
  holeEighteenPutts: "",
  holeEighteenNotes: ""
};

// $scope.$watch($scope.newCard.holeEighteenScore , function(){
//   $scope.totalScore = 0 + $scope.newCard.holeEighteenScore

//   return $scope.totalScore
// })

  $scope.addNewScorecard = function(){
    ScorecardFactory.postNewScorecard($scope.newCard)
      .then(function(response){
        console.log("res", response);
      });
  };
});