const table = document.querySelector(".board");
let boardData;
let gameOver = false;
let revealedCells = 0;
let totalSafeCells = 0;
let firstClick = true;
let currentRow = 0;
let currentCol = 0; 

function createBoardData(rows, cols, minesCount, excludeRow, excludeCol){
   const boardContent = Array.from({length: rows }, () => Array(cols).fill(0))
   let placedMines = 0;
   while(placedMines < minesCount){
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols)
    
    if (excludeRow !== undefined && excludeCol !== undefined) {
      if (Math.abs(row - excludeRow) <= 1 && Math.abs(col - excludeCol) <= 1) {
        continue;
      }
    }
    
    if (boardContent[row][col] !== "mine"){
      boardContent[row][col] = "mine"
      placedMines++;

      for (let i = -1; i <=1; i++){
        for (let j = -1; j <= 1; j++){
          const newRow = row + i;
          const newCol = col + j;
          if(newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols){
            if(boardContent[newRow][newCol] !== 'mine'){
              boardContent[newRow][newCol]++;
            }
          }
        }
      }
    }
   }
   return boardContent
}

function makeBoard(table, boardData){
  table.innerHTML = '';
  for (let i = 0; i < 12; i++){
    const row = document.createElement("tr")
    for (let j = 0; j < 12; j++){
      const cell = document.createElement("td")
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.dataset.content = boardData[i][j];
      cell.dataset.flagged = 'false';

      // Левый клик - открытие ячейки
      cell.addEventListener('click', function(e) {
        e.preventDefault();
        if(gameOver || this.classList.contains('revealed') || this.dataset.flagged === 'true'){
            return;
        }
        const row = parseInt(this.dataset.row);
        const col = parseInt(this.dataset.col);
        
        if (firstClick) {
          boardData = createBoardData(12, 12, 20, row, col);
          makeBoard(table, boardData);
          firstClick = false;
          const newCell = table.querySelector(`td[data-row="${row}"][data-col="${col}"]`);
          revealCell(row, col, boardData);
          return;
        }
        
        revealCell(row, col, boardData);
      });
      
      cell.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        if(gameOver || this.classList.contains('revealed')){
            return;
        }
        toggleFlag(this);
      });
      
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  
  highlightCell(currentRow, currentCol);
}

function toggleFlag(cell) {
  if (cell.dataset.flagged === 'false') {
    cell.dataset.flagged = 'true';
    cell.textContent = '🚩';
    cell.classList.add('flagged');
  } else {
    cell.dataset.flagged = 'false';
    cell.textContent = '';
    cell.classList.remove('flagged');
  }
}

function revealCell(row, col, boardData) {
  if (row < 0 || row >= 12 || col < 0 || col >= 12 || gameOver) {
    return;
  }
  
  const cell = table.querySelector(`td[data-row="${row}"][data-col="${col}"]`);
  
  if (!cell || cell.classList.contains('revealed') || cell.dataset.flagged === 'true') {
    return;
  }
  
  cell.classList.add('revealed');
  revealedCells++;
  const content = boardData[row][col];
  
  if (content === 'mine') {
    cell.textContent = '💣';
    cell.style.backgroundColor = 'red';
    gameOver = true;
    showGameOver(false);
    revealAllMines(boardData);
    return;
  } else if (content === 0) {
    cell.style.backgroundColor = '#ddd';
    
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        revealCell(row + i, col + j, boardData);
      }
    }
  } else {
    cell.textContent = content;
    cell.style.backgroundColor = '#ddd';
  }
  
  if (revealedCells === totalSafeCells) {
    gameOver = true;
    showGameOver(true);
  }
}

function revealAllMines(boardData) {
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
      if (boardData[i][j] === 'mine') {
        const cell = table.querySelector(`td[data-row="${i}"][data-col="${j}"]`);
        if (cell && !cell.classList.contains('revealed')) {
          cell.classList.add('revealed');
          cell.textContent = '💣';
          cell.style.backgroundColor = '#faa';
        }
      }
    }
  }
}

function showGameOver(isWin) {
  const message = document.createElement('div');
  message.className = 'game-message';
  message.innerHTML = `
    <div class="message-content">
      <h2>${isWin ? '🎉 Победа!' : '💥 Проигрыш!'}</h2>
      <p>${isWin ? 'Вы открыли все безопасные клетки!' : 'Вы наткнулись на мину!'}</p>
      <button class="restart-btn" onclick="restartGame()">Начать заново</button>
    </div>
  `;
  document.body.appendChild(message);
}

function restartGame() {
  const message = document.querySelector('.game-message');
  if (message) {
    message.remove();
  }
  
  gameOver = false;
  revealedCells = 0;
  firstClick = true;
  currentRow = 0;
  currentCol = 0;
  boardData = createBoardData(12, 12, 20);
  totalSafeCells = 12 * 12 - 20;
  makeBoard(table, boardData);
}

function highlightCell(row, col) {
  const allCells = table.querySelectorAll('td');
  allCells.forEach(cell => cell.classList.remove('highlighted'));
  
  const cell = table.querySelector(`td[data-row="${row}"][data-col="${col}"]`);
  if (cell) {
    cell.classList.add('highlighted');
  }
}

document.addEventListener('keydown', function(e) {
  if (gameOver) return;
  
  const oldRow = currentRow;
  const oldCol = currentCol;
  
  switch(e.key) {
    case 'ArrowUp':
      e.preventDefault();
      currentRow = Math.max(0, currentRow - 1);
      break;
    case 'ArrowDown':
      e.preventDefault();
      currentRow = Math.min(11, currentRow + 1);
      break;
    case 'ArrowLeft':
      e.preventDefault();
      currentCol = Math.max(0, currentCol - 1);
      break;
    case 'ArrowRight':
      e.preventDefault();
      currentCol = Math.min(11, currentCol + 1);
      break;
    case ' ':
    case 'Enter':
      e.preventDefault();
      const cell = table.querySelector(`td[data-row="${currentRow}"][data-col="${currentCol}"]`);
      
      if (e.ctrlKey) {
        if (cell && !cell.classList.contains('revealed')) {
          toggleFlag(cell);
        }
      } else {
        if (cell && !cell.classList.contains('revealed') && cell.dataset.flagged === 'false') {
          if (firstClick) {
            boardData = createBoardData(12, 12, 20, currentRow, currentCol);
            makeBoard(table, boardData);
            firstClick = false;
          }
          revealCell(currentRow, currentCol, boardData);
        }
      }
      break;
  }
  
  if (oldRow !== currentRow || oldCol !== currentCol) {
    highlightCell(currentRow, currentCol);
  }
});
let numMins = 20
boardData = createBoardData(12, 12, numMins);
totalSafeCells = 12 * 12 - numMins;
makeBoard(table, boardData);
