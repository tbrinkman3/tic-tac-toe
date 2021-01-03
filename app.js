$(document).ready(function() {

  var $square = $('.square');


  var playGame = function() {

    var count = 1;





    $square.on('click', function() {
      if (count >= 9) {
        alert('End of Game')
      }
      var id = $(this).attr('id');
      if(count % 2 === 0) {
        $('#'+id).text('X');
        count++;
      } else {
      $('#'+id).text('O');
      count++;
      }

    })


  }



  playGame();









})

