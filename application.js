$(function(){
console.log('doc ready')


cities = [];
var city_objs = [];


var sortCities = function(cityObj){
  cityObj.forEach(function(city) {
     console.log(city);

     $('body').append( "<br><button>" + city.name +"</button>" );
   // city_objs.RESULTS[0].name
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
        // console.log(response);
       sortCities(response.RESULTS);
      }
    });

  });



});