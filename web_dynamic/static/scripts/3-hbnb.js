$(document).ready(func1);

function func1 () {
  const amenitiesDict = {};
  $('.amenities input').change(function () {
    if ($(this).is(':checked')) {
      amenitiesDict[$(this).attr('data-name')] = $(this).attr('data-id');
    // console.log(amenitiesDict)
    } else {
      delete amenitiesDict[$(this).attr('data-name')];
    // console.log(amenitiesDict)
    }
    const names = Object.keys(amenitiesDict);
    $('.amenities > h4').text(names.sort().join(', '));
  });
}
$.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
  // console.log(data)
  // console.log(data.status)
  // const values = Object.values(data)
  // if (values.includes('OK')) {
  if (data.status === 'OK') {
    $('div#api_status').addClass('available');
  }
});
$.ajax({
  type: 'POST',
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  data: '{}',
  contentType: 'application/json; charset=utf-8',
  dataType: 'json',
  success: function (data) {
    // console.log(data)
    for (const place of data) {
      console.log(place);
      // console.log(place.name)
      $('.places').append(
        '<article><div div class= "title_box" ><h2>' +
        place.name + '</h2><div class="price_by_night">' + place.price_by_night + '</div></div><div class="information"><div class="max_guest"><i class="fa fa-users fa-3x" aria-hidden="true"></i><br />' + place.max_guest + ' Guests</div><div class="number_rooms"><i class="fa fa-bed fa-3x" aria-hidden="true"></i><br />' + place.number_rooms + ' Bedrooms</div><div class="number_bathrooms"><i class="fa fa-bath fa-3x" aria-hidden="true"></i><br />' + place.number_bathrooms + ' Bathroom</div></div><div class="user"><div class="description">' + place.description + '</div></article>');
    }
  }
});
