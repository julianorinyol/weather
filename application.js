$(function(){
console.log('doc ready')


cities = [];
console.log(cities)
  $('#submit-button').on('click', function(e){
    e.preventDefault;

    console.log('clicked');
    var query = $('#city-search-field').val();
    console.log('search = ' + query);

    city_objs = '';
    $.ajax({
      method: "GET",
      jsonp: 'cb',
      dataType: "jsonp",
      url: "http://autocomplete.wunderground.com/aq?query=" + query,
      success: function(response){
        console.log(response);
        city_objs = response;
      }
    });
  //   city_objs.forEach(function(
  //     console.log(city)
  //     // city_objs.RESULTS[0].name
  //   ), city)
  });



});