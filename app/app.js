var app = angular.module("iCaddy", ["ngRoute"])

// constant for firebase here
//constant for weather api here

app.config(function($routeProvider){
  $routeProvider.
  when('/',{
  templateUrl: 'partials/main.html',
  controller: 'MainViewCtrl'
  }).
  when('/weather',{
  templateUrl: 'partials/weather.html',
  controller: 'WeatherCtrl'
  }).
  when('/scorecards/new',{
  templateUrl: 'partials/newround.html',
  controller: 'NewCardCtrl'
  }).
  when('/scorecards/all',{
  templateUrl: 'partials/allCards.html',
  controller: 'AllCardsCtrl'
  }).
  when('/stats',{
  templateUrl: 'partials/stats.html',
  controller: 'StatsCtrl'
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
