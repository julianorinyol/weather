$(function(){
  console.log('doc ready')

  var cities = [];

  var sortCities = function(cityObj){
    cityObj.forEach(function(city) {
       $('#results').append( "<br><button>" + city.name +"</button>");
     });
  }

  var getWeather = function(zmw, cityName) {
    $.ajax({
      method: "GET",
      // jsonp: 'cb',
      dataType: "jsonp",
      // url: "http://api.wunderground.com/api/4c2c6e229659e196/forecast/q/zmw:" + zmw + ".json",
      url: "http://api.wunderground.com/api/6cc5df2c6acc5d95/forecast/q/zmw:" + zmw + ".json",
      success: function(response){
        console.log(response);
        $("#weather-result").empty();
       $('#weather-result').append("<p>" + cityName + "</p>");
       $('#weather-result').append("<p>high fahrenheit: " + response.forecast.simpleforecast.forecastday[0].high.fahrenheit + "</p>");
       $('#weather-result').append("<p>low farenheit: " + response.forecast.simpleforecast.forecastday[0].low.fahrenheit + "</p>");

        // $('#weather-result').append()
      }
    });
  }

  $('#submit-button').on('click', function(e){
    e.preventDefault;

    console.log('clicked');
    var query = $('#city-search-field').val();

    $.ajax({
      method: "GET",
      jsonp: 'cb',
      dataType: "jsonp",
      url: "http://autocomplete.wunderground.com/aq?query=" + query,
      success: function(response){
       sortCities(response.RESULTS);
       cities = response.RESULTS;
      }
    });
  });

  $('#results').on('click', 'button', function(e){
    var cityName = $(this).text()
    cities.forEach(function(city) {
      if(city.name === cityName) {
        getWeather(city.zmw, cityName);
      }
    });
    // $(this).attr('id')
  });
  
  



});