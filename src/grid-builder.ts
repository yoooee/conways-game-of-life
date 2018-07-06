import { Cell } from './cell';

export class GridBuilder {

  private _grid: Array<Array<Cell>> = [];
  private _numOfRows: number;
  private _numOfCols: number;

  build(gridPattern: Array<Array<number>>) {

    this._numOfRows = gridPattern.length;
    this._numOfCols = gridPattern[0].length;

    for(let row: number = 0; row < this._numOfRows; row++) {

      this._grid[row] = [new Cell(0)];

      for(let col: number = 0; col < this._numOfCols; col++) {
        this._grid[row][col] = new Cell(gridPattern[row][col]);
      }
    }
    return this._grid;
  }
}
