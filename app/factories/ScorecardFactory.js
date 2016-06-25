"use strict";

app.factory("ScorecardFactory", function($q, $http, firebaseURL, AuthFactory) {

  var getScorecardsFromFirebase = function(){
    var scorecards = [];
    let user = AuthFactory.getUser();
    console.log("getcardsuser", user);
    return $q(function(resolve, reject){
    $http.get(`${firebaseURL}scorecard.json`)
    .success(function(scorecardObject){
      let scorecardCollection = scorecardObject
      console.log("scorecardCollection", scorecardCollection);
      scorecards.push(scorecardCollection)
      resolve(scorecardCollection)
    })
    })
  }

  

  var postNewScorecard = function(newCard){
    let user = AuthFactory.getUser();
    console.log("current user", user);
    // newCard.userid = "";
    return $q(function(resolve,reject){
      $http.post(
        firebaseURL + "scorecards.json",
        JSON.stringify({
          roundDate:newCard.roundDate,
          roundCourse:newCard.roundCourse,
          courseRating:newCard.courseRating, 
          courseSlope:newCard.courseSlope, 
          courseHandicap:"",
          holeOneScore:newCard.holeOneScore,
          holeOneFairway:newCard.holeOneFairway,
          holeOnePutts:newCard.holeOnePutts,
          holeOneNotes:newCard.holeOneNotes,
          holeTwoScore:newCard.holeTwoScore,
          holeTwoFairway:newCard.holeTwoFairway,
          holeTwoPutts:newCard.holeTwoPutts,
          holeTwoNotes:newCard.holeTwoNotes,
          holeThreeScore:newCard.holeThreeScore,
          holeThreeFairway:newCard.holeThreeFairway,
          holeThreePutts:newCard.holeThreePutts,
          holeThreeNotes:newCard.holeThreeNotes,
          holeFourScore:newCard.holeFourScore,
          holeFourFairway:newCard.holeFourFairway,
          holeFourPutts:newCard.holeFourPutts,
          holeFourNotes:newCard.holeFourNotes,
          holeFiveScore:newCard.holeFiveScore,
          holeFiveFairway:newCard.holeFiveFairway,
          holeFivePutts:newCard.holeFivePutts,
          holeFiveNotes:newCard.holeFiveNotes,
          holeSixScore:newCard.holeSixScore,
          holeSixFairway:newCard.holeSixFairway,
          holeSixPutts:newCard.holeSixPutts,
          holeSixNotes:newCard.holeSixNotes,
          holeSevenScore:newCard.holeSevenScore,
          holeSevenFairway:newCard.holeSevenFairway,
          holeSevenPutts:newCard.holeSevenPutts,
          holeSevenNotes:newCard.holeSevenNotes,
          holeEightScore:newCard.holeEightScore,
          holeEightFairway:newCard.holeEightFairway,
          holeEightPutts:newCard.holeEightPutts,
          holeEightNotes:newCard.holeEightNotes,
          holeNineScore:newCard.holeNineScore,
          holeNineFairway:newCard.holeNineFairway,
          holeNinePutts:newCard.holeNinePutts,
          holeNineNotes:newCard.holeNineNotes,
          holeTenScore:newCard.holeTenScore,
          holeTenFairway:newCard.holeTenFairway,
          holeTenPutts:newCard.holeTenPutts,
          holeTenNotes:newCard.holeTenNotes,
          holeElevenScore:newCard.holeElevenScore,
          holeElevenFairway:newCard.holeElevenFairway,
          holeElevenPutts:newCard.holeElevenPutts,
          holeElevenNotes:newCard.holeElevenNotes,
          holeTwelveScore:newCard.holeTwelveScore,
          holeTwelveFairway:newCard.holeTwelveFairway,
          holeTwelvePutts:newCard.holeTwelvePutts,
          holeTwelveNotes:newCard.holeTwelveNotes,
          holeThirteenScore:newCard.holeThirteenScore,
          holeThirteenFairway:newCard.holeThirteenFairway,
          holeThirteenPutts:newCard.holeThirteenPutts,
          holeThirteenNotes:newCard.holeThirteenNotes,
          holeFourteenScore:newCard.holeFourteenScore,
          holeFourteenFairway:newCard.holeFourteenFairway,
          holeFourteenPutts:newCard.holeFourteenPutts,
          holeFourteenNotes:newCard.holeFourteenNotes,
          holeFifteenScore:newCard.holeFifteenScore,
          holeFifteenFairway:newCard.holeFifteenFairway,
          holeFifteenPutts:newCard.holeFifteenPutts,
          holeFifteenNotes:newCard.holeFifteenNotes,
          holeSixteenScore:newCard.holeSixteenScore,
          holeSixteenFairway:newCard.holeSixteenFairway,
          holeSixteenPutts:newCard.holeSixteenPutts,
          holeSixteenNotes:newCard.holeSixteenNotes,
          holeSeventeenScore:newCard.holeSeventeenScore,
          holeSeventeenFairway:newCard.holeSeventeenFairway,
          holeSeventeenPutts:newCard.holeSeventeenPutts,
          holeSeventeenNotes:newCard.holeSeventeenNotes,
          holeEighteenScore:newCard.holeEighteenScore,
          holeEighteenFairway:newCard.holeEighteenFairway,
          holeEighteenPutts:newCard.holeEighteenPutts,
          holeEighteenNotes:newCard.holeEighteenNotes
          // uid:user.uid
        })
      )
      .success(
        function(objectFromFirebase){
          resolve(objectFromFirebase);
        }
      );
    });
  };




  return {postNewScorecard:postNewScorecard}
});