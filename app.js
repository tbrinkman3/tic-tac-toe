//Selectors
var table = document.querySelector('table');
var cells = document.querySelectorAll('table td');
var resetButton = document.getElementById('reset');
var testButton = document.getElementById('test')
var result = document.querySelector('h2');

console.log(result)

//Tracks 'X' or 'O'
var count = 1;

//Helper functions
var isEven = number => number % 2 === 0 ? true : false;

var placer = (e) => {
  var target = e.target;
  if (!target.classList.contains('clicked')) {
    target.classList.add('clicked');
    if (!isEven(count)) {
      target.innerHTML = 'X';
    } else {
      target.innerHTML = 'O';
    }
    count++;
  }
}

var reset = () => {
  cells.forEach(cell => {
    cell.innerHTML = '';
    cell.classList.remove('clicked');
  })
  count = 1;
}

//Board Checker


console.log(document.querySelector('table').rows[0].cells)

var checkColumn = () => {};

var checkRows = (table) => {
  var rows = Array.from(table.rows);
  rows.forEach(row => {
    var row = Array.from(row.cells);
    var numX = '';
    var numO = '';
    row.forEach(cell => {
      var input = cell.innerHTML;
      if (input === 'X') {
        numX+= input;
      }
      if (input === 'O') {
        numO+= input;
      }
    })
    if (numX === 'XXX') {
      result.innerHTML = 'X Wins!'
    }
    if (numO === 'OOO'){
      result.innerHTML = 'O Wins!'
    }
  })
};



var checkDiag = () => {};

var checkBoard = (table) => {};



//Event Listeners
cells.forEach(cell => {
  cell.addEventListener('click', e => placer(e))
})

resetButton.addEventListener('click', reset);
testButton.addEventListener('click', () => checkRows(table))



