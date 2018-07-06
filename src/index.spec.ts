import { Game } from './game';

describe('Home Page', () => {

  describe('Game', () => {

    let subject;
    const rowCount: number = 9;
    const colCount: number = 9;
    let startingPattern: Array<Array<number>> = [
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
    })

    it('should create a new game 9x9 game grid', () => {
      expect(subject.numberOfRows).toEqual(rowCount);
      expect(subject.numberOfCols).toEqual(colCount);
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
