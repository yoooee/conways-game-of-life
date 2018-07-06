import './app.scss';

import { Game } from './game';
let startingPattern: Array<Array<number>>;
startingPattern = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
];

let conwaysGame = new Game(startingPattern);

let gameData = document.getElementById('game');
gameData.innerHTML= conwaysGame.drawGrid();

setInterval(() => {
  //gameData.innerHTML = conwaysGame.drawGrid();
}, 1000);
