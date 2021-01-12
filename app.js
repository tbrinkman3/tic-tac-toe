$(document).ready(function() {
  console.log('werks')
  const $statusDisplay = $('.game--status');

  const $cells = $('.cell');
  const $restart = $('.game--restart');

  const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  const winningMessage = () => `Player ${currentPlayer} has won!`;
  const drawMessage = () => `Game ended in a draw!`
  const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;


  let gameActive = true;

  let currentPlayer = 'X';

  let gameState = ['','','','','','','','',''];

  $statusDisplay.html(currentPlayerTurn());

  function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
  }

  function handlePlayerChange() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    $statusDisplay.html(currentPlayerTurn())
  }

  function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      let a = gameState[winCondition[0]];
      let b = gameState[winCondition[1]];
      let c = gameState[winCondition[2]];

      if(a==='' || b==='' || c === '') {
        continue;
      }
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }
    if (roundWon) {
      $statusDisplay.html(winningMessage());
      gameActive = false;
      return;
    }

    let roundDraw = !gameState.includes('');
    if (roundDraw) {
      $statusDisplay.html(drawMessage());
      gameActive = false;
      return;
    }
    handlePlayerChange();

  }

  function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== '' || !gameActive) {
      return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();

  }

  function handleRestartGame() {
    gameActive = true;
    currentPlayer = 'X';
    gameState = ['','','','','','','','',''];
    $statusDisplay.html(currentPlayerTurn());
    $cells.html('');

  }






$cells.on('click', handleCellClick);
$restart.on('click', handleRestartGame);

})

