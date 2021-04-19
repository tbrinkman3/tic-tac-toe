//Selectors
var table = document.querySelector('table');
var cells = document.querySelectorAll('table td');
var resetButton = document.getElementById('reset');
var result = document.querySelector('h2');

//Tracks 'X' or 'O'
var count = 1;

//Helper functions
var isEven = number => number % 2 === 0 ? true : false;

var placer = (e) => {
  if(!table.classList.contains('finished')) {
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
    checkBoard(table)
  }
}

var reset = () => {
  cells.forEach(cell => {
    cell.innerHTML = '';
    cell.classList.remove('clicked');
  })
  result.innerHTML = '';
  count = 1;
}

var checkWin = input => {
  if (input === 'XXX') {
    result.innerHTML = 'X Wins!'
    table.classList.add('finished');
  }
  if (input === 'OOO'){
    result.innerHTML = 'O Wins!';
    table.classList.add('finished');
  }
}

//Board Checker

var checkCols = (table) => {
  var allCols = [];

  var rows = Array.from(table.rows);
  for(let i = 0; i < rows.length; i++) {
    for(let j = 0; j < rows.length; j++) {
      var row = Array.from(rows[j].cells);
      allCols.push(row[i].innerHTML)
    }
  }
  var col1 = allCols.slice(0,3).join('');
  var col2 = allCols.slice(3, 6).join('');
  var col3 = allCols.slice(6, 9).join('');

  checkWin(col1);
  checkWin(col2);
  checkWin(col3);

};

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
    checkWin(numX);
    checkWin(numO);
  })
};

var checkDiag = (table) => {
  var rows = Array.from(table.rows);
  var resultRow = [];

  for(let i = 0; i < rows.length; i++) {
    var row = Array.from(rows[i].cells);
    row.forEach(cell => {
      resultRow.push(cell.innerHTML)
    })
  }
  var majorDiag = resultRow[0] + resultRow[4] + resultRow[8];
  var minorDiag = resultRow[2] + resultRow[4] + resultRow[6];

  checkWin(majorDiag);
  checkWin(minorDiag);
};

var checkBoard = (table) => {
  checkCols(table);
  checkDiag(table);
  checkRows(table);

};

//Event Listeners
cells.forEach(cell => {
  cell.addEventListener('click', e => placer(e))
})

resetButton.addEventListener('click', reset);




