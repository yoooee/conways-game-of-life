import { Cell } from './cell';
import { GridBuilder } from './grid-builder';

describe('GridBuilder', () => {

  describe('Build', () => {

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
    const testPattern: Array<Array<number>> = [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ];

    let gridBuilder: GridBuilder = new GridBuilder();
    let subject = gridBuilder.build(testPattern);

    it('should create an array of Cell objects', () => {
      expect(subject[0][0]).toEqual(jasmine.any(Cell));
    });
  });
});
