import { Cell } from './cell';
import { Grid } from './models';

export class GridBuilder {

  private _grid: Grid = [];
  private _numOfRows: number;
  private _numOfCols: number;

  build(gridPattern: Array<Array<number>>) {

    this._numOfRows = gridPattern.length;
    this._numOfCols = gridPattern[0].length;

    for(let row: number = 0; row < this._numOfRows; row++) {

      this._grid[row] = [new Cell()];

      for(let col: number = 0; col < this._numOfCols; col++) {

        const newCell = new Cell();
        newCell.status = gridPattern[row][col];
        newCell.x = col;
        newCell.y = row;
        this._grid[row][col] = newCell;
      }
    }
    return this._grid;
  }
}
