function getHex() {
  let myStr = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  let hashTag = '#';
  for (let i = 0; i < 6; i++) {
    let ranNum = Math.floor(Math.random() * 16);
    hashTag = hashTag + myStr[ranNum];
  }
  return hashTag;
}

const pixelUnits = 100;

let maxSquares = window.innerHeight * Math.floor(window.innerWidth / 10);

maxSquares = maxSquares / pixelUnits;

const board = document.createElement('div');
board.style.width = '800px';
board.innerHTML = '<div id="board"></div>';
document.body.appendChild(board);

const boardColor = '#ffffff';

for (let i = 0; i < maxSquares; i++) {
  let div = document.createElement('div');
  div.innerHTML = `<div id="${i}" style="margin: 5px; float: left;height:${pixelUnits}px; width:${pixelUnits}px; color:#000000;"><center><h1>${i}</h1></center></div>`;
  document.getElementById('board').appendChild(div);
}

let snake = [0, -1, -2, -3];

function newRandomColors() {
  for (let i = 0; i < maxSquares; i++) {
    let thisElement = document.getElementById(i);
    thisElement.style.backgroundColor = getHex();
  }
}

function snakeMove() {
  for (i = 0; i < 4; i++) {
    snake[i] = snake[i] + 1;
  }
}

function snakeMoveColor() {
  let opacity = 1;

  for (i = 0; i < snake.length; i++) {
    if (snake[i] >= 0) {
      opacity = opacity - 0.2;
      const thisElement = document.getElementById(snake[i]);
      const snakeColor = `rgba(255, 0, 0, ${opacity})`;
      thisElement.style.backgroundColor = snakeColor;
    }

    if (snake[0] >= 4) {
      const behindSnake = document.getElementById(snake[3] - 1);
      behindSnake.style.backgroundColor = boardColor;
    }
  }
}

setInterval(function () {
  snakeMoveColor();
  snakeMove();
}, 100);
