import { Cell } from './cell';
import { Grid, GridPattern } from './models';

export class GridBuilder {

  build(gridPattern: GridPattern) {

    let grid: Grid = [];
    const numOfRows: number = gridPattern.length;
    const numOfCols: number = gridPattern[0].length;


    for(let row: number = 0; row < numOfRows; row++) {

      grid[row] = [new Cell()];

      for(let col: number = 0; col < numOfCols; col++) {

        const newCell = new Cell();
        newCell.status = gridPattern[row][col];
        newCell.x = col;
        newCell.y = row;
        grid[row][col] = newCell;
      }
    }
    return grid;

    //return gridPattern.map(y => y.map(x => new Cell(x, y, gridPattern[y][x])))
  }
}
