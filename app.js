$(document).ready(function() {

  var $square = $('.square');


  $square.on('click', function() {
    var id = $(this).attr('id');
    console.log(id)
    $('#'+id).text('X')


  })



})

