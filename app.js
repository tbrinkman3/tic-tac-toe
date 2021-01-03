$(document).ready(function() {

  var $square = $('.square');


  var playGame = function() {

    var count = 0;


    var checkWinner = function() {
      if (count > 6) {
        $square1 = $('#square1').text()
        $square2 = $('#square2').text()
        $square3 = $('#square3').text()

        if ($square1 === $square2 && $square2 === $square3) {
          alert($square1 + ' Wins!')
        }
      }

    }


    $square.on('click', function() {
      if (count >= 8) {
        alert('End of Game')
      }
      var id = $(this).attr('id');
      //console.log(id)
      if(count % 2 === 0) {
        $('#'+id).text('X');
        count++;
      } else {
      $('#'+id).text('O');
      count++;
      }

      checkWinner()

    })


  }



  playGame();









})

