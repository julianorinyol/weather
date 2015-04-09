$(function(){
  console.log('doc ready')

  var cities = [];

  var sortCities = function(cityObj){
    cityObj.forEach(function(city) {
       $('#results').append( "<br><button>" + city.name +"</button>");
     });
  }

  var getWeather = function(id) {
    $.ajax({
      method: "GET",
      // jsonp: 'cb',
      dataType: "jsonp",
      // url: "http://api.wunderground.com/api/4c2c6e229659e196/forecast/q/zmw:" + id + ".json",
      url: "http://api.wunderground.com/api/6cc5df2c6acc5d95/forecast/q/zmw:" + id + ".json",
      success: function(response){
        console.log('success')
      }
    });
  }

  $('#submit-button').on('click', function(e){
    e.preventDefault;

    console.log('clicked');
    var query = $('#city-search-field').val();
    // console.log('search = ' + query);

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
        getWeather(city.zmw);
      }
    });
    // $(this).attr('id')
  });
  
  



});