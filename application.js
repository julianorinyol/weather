$(function(){
  console.log('doc ready')

  var counter = 0;

  var sortCities = function(cityObj){
    cityObj.forEach(function(city) {
       $('body').append( "<br><button id='" + counter + "'>" + city.name +"</button>");
      counter++;
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

  $('')


});