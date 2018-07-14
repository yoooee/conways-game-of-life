import './app.scss';

import { Game } from './game';
let blinkerPattern: Array<Array<number>>;
blinkerPattern = [
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

let beaconPattern: Array<Array<number>>;
beaconPattern = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,0,0,0,0,0,0],
  [0,0,1,1,0,0,0,0,0,0],
  [0,0,0,0,1,1,0,0,0,0],
  [0,0,0,0,1,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
];

let toadPattern: Array<Array<number>>;
toadPattern = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0],
  [0,0,1,1,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
];

let randomPattern: Array<Array<number>>;
randomPattern = [
  [0,1,0,0,0,0,0,0,0,0],
  [1,1,1,0,0,0,0,0,0,0],
  [0,1,0,1,0,0,0,0,0,0],
  [0,0,0,1,0,0,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0],
  [0,0,1,1,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,1],
  [0,0,0,0,1,1,0,0,1,1],
  [0,0,0,1,1,1,0,0,1,0],
  [0,0,0,0,1,0,0,0,0,0]
];

let conwaysGame = new Game(blinkerPattern);
//let conwaysGame = new Game(beaconPattern);
//let conwaysGame = new Game(toadPattern);
//let conwaysGame = new Game(randomPattern);

let gameData = document.getElementById('game');

setInterval(() => {
  gameData.innerHTML = conwaysGame.drawGrid();
  conwaysGame.update();
}, 500);
