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
    console.log(data);
  }
});
