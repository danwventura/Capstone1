app.factory("WeatherFactory", function($q, $http, weatherURL, AuthFactory){


    var rawWeatherData;
 

    var getWeatherDataFromApi = function(zipCode){
      let userZip = zipCode
      console.log("userzip", userZip);
      return $q(function(resolve, reject){
      $http.get(`${weatherURL}${userZip}.json`)
        .success(function(weatherObject){
          var returnedWeatherData = weatherObject.hourly_forecast;
          rawWeatherData = returnedWeatherData
          console.log("raw", rawWeatherData[0])
          resolve(rawWeatherData)
        })

      })
    }








return {getWeatherDataFromApi: getWeatherDataFromApi}
})