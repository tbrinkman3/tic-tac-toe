//Selectors
var cells = document.querySelectorAll('table td');
var resetButton = document.querySelector('button');


//Tracks 'X' or 'O'
var count = 1;

//Helper functions
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

var reset = () => {
  cells.forEach(cell => {
    cell.innerHTML = '';
    cell.classList.remove('clicked');
  })
  count = 1;
}



//Event Listeners
cells.forEach(cell => {
  cell.addEventListener('click', e => placer(e))
})

resetButton.addEventListener('click', reset);



