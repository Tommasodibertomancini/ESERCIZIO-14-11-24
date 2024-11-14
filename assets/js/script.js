const grid = document.getElementById('grid');
for (let i = 0; i < 90; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.innerText = i + 1;
  grid.appendChild(cell);
}

const playerGrid = document.getElementById('playerGrid');
let playerNumbers = [];
while (playerNumbers.length < 15) {
  const randomNum = Math.floor(Math.random() * 90) + 1;
  if (!playerNumbers.includes(randomNum)) {
    playerNumbers.push(randomNum);
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.innerText = randomNum;
    playerGrid.appendChild(cell);
  }
}

const drawButton = document.getElementById('drawButton');
const drawnNumberElement = document.getElementById('number');
let drawnNumbers = [];

drawButton.addEventListener('click', () => {
  if (drawnNumbers.length >= 90) {
    alert('Tutti i numeri sono stati estratti!');
    return;
  }

  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * 90) + 1;
  } while (drawnNumbers.includes(randomNum));

  drawnNumbers.push(randomNum);
  drawnNumberElement.innerText = randomNum;
  const cells = document.querySelectorAll('#grid .cell');
  cells[randomNum - 1].classList.add('drawn');

  const playerCells = document.querySelectorAll('#playerGrid .cell');
  playerCells.forEach((cell) => {
    if (parseInt(cell.innerText) === randomNum) {
      cell.classList.add('drawn');
    }
  });
});
