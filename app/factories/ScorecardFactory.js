"use strict";

app.factory("ScorecardFactory", function($q, $http, firebaseURL, AuthFactory) {

  var postNewScorecard = function(newCard){
    let user = AuthFactory.getUser();
    console.log("current user", user);
    return $q(function(resolve,reject){
      $http.post(
        firebaseURL + "scorecards.json",
        JSON.stringify(newCard)
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