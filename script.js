let gridContainer = document.querySelector('.grid-container');
let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let resetBtn = document.getElementById('resetBtn');
let isPlaying = false;
let grid = [];
let rows = 20;
let cols = 20;

function createGrid() {
  for (let i = 0; i < rows; i++) {
    grid[i] = [];
    for (let j = 0; j < cols; j++) {
      let cell = document.createElement('div');
      cell.className = 'grid-item';
      cell.addEventListener('click', function() {
        if (!isPlaying) {
          this.classList.toggle('active');
        }
      });
      grid[i][j] = cell;
      gridContainer.appendChild(cell);
    }
  }
}

function startGame() {
  isPlaying = true;
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resetBtn.disabled = false;
}

function pauseGame() {
  isPlaying = false;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

function resetGame() {
  isPlaying = false;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resetBtn.disabled = true;
  grid.forEach(row => {
    row.forEach(cell => {
      cell.classList.remove('active');
    });
  });
}

createGrid();

startBtn.addEventListener('click', startGame);
pauseBtn.addEventListener('click', pauseGame);
resetBtn.addEventListener('click', resetGame);
    
