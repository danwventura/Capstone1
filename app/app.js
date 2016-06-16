var app = angular.module("iCaddy", ['ngRoute'])

// constant for firebase here
.constant("firebaseURL", "https://icaddy.firebaseio.com/")
//constant for weather api here

let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  if (AuthFactory.isAuthenticated ()){
    resolve();
  } else {
    reject();
  }
})


app.config(function($routeProvider){
  $routeProvider.
  when('/',{
  templateUrl: 'partials/main.html',
  controller: 'MainViewCtrl',
  resolve: {isAuth}
  }).
  when('/weather',{
  templateUrl: 'partials/weather.html',
  controller: 'WeatherCtrl',
  resolve: {isAuth}
  }).
  when('/scorecards/new',{
  templateUrl: 'partials/newround.html',
  controller: 'NewCardCtrl',
  resolve: {isAuth}
  }).
  when('/scorecards/all',{
  templateUrl: 'partials/allCards.html',
  controller: 'AllCardsCtrl',
  resolve: {isAuth}
  }).
  when('/stats',{
  templateUrl: 'partials/stats.html',
  controller: 'StatsCtrl',
  resolve: {isAuth}
  }).
  when('/login',{
  templateUrl: 'partials/login.html',
  controller: 'LoginCtrl'
  }).
  when('/logout',{
  templateUrl: 'partials/login.html',
  controller: 'LoginCtrl'
  }).
  otherwise('/');
  });


app.run(($location) => {
    let icaddyRef = new Firebase("https://icaddy.firebaseio.com/");

    icaddyRef.onAuth(authData => {
      if(!authData){
        $location.path("/login")
      }
    })
  })