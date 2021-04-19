//Selectors
var cells = document.querySelectorAll('table td');


//Helper functions
var count = 1;

var isEven = number => number % 2 === 0 ? true : false;



var placer = (e) => {
  var target = e.target;
  if (!target.classList.contains('clicked')) {
    if (!isEven(count)) {
      target.innerHTML = 'X';
      target.classList.add('clicked');
      count++;
    } else {
      target.innerHTML = 'O';
      target.classList.add('clicked');
      count++;
    }
  }
}




cells.forEach(cell => {
  cell.addEventListener('click', e => placer(e))
})

