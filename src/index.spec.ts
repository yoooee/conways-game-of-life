import { Game } from './game';
import { GridPattern } from './models';

describe('Home Page', () => {

  describe('Game', () => {

    let subject;
    const rowCount: number = 9;
    const colCount: number = 9;
    let startingPattern: GridPattern = [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0]
    ];

    beforeEach(() => {
      subject = new Game(startingPattern);
    });

    describe('Draw', () => {

      let subject;

      beforeEach(() => {
        subject = new Game(startingPattern);
      });



      //it('should start a timer', () => {
      //console.log('interval ', subject.interval);
      //subject.start();
      //setInterval(() => {
      //console.log('interval after', subject.interval);
      //expect(subject.interval).toBeGreaterThan(0);
      //},2000);
      //});
    });
  });

  //describe('Interval', () => {
  //let subject: number = 0;

  //it('should increase infinitley', () => {
  //expect(subject).toBeGreaterThan(0);
  //})
  //})
})
