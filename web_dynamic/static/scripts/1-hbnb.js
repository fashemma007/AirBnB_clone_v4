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
