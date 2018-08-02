import { GridPattern } from './models';

export class GridManager {

  private _nw: number;
  private _n: number;
  private _ne: number;
  private _e: number;
  private _se: number;
  private _s: number;
  private _sw: number
  private _w: number;

  private _getNeighborStatus(pattern, x, y) {
    if (pattern[y] && pattern[y][x]) {
      return pattern[y][x].status;
    } else {
      return 0;
    }
  }

  update(gridPattern) {
    // loop through array pattern.
    let currentCell;
    let newPattern: GridPattern = [];
    console.log('Starting Pattern = ', gridPattern);
    //debugger;
    for (let y = 0; y < gridPattern.length; y++) {
      newPattern[y] = [];
      console.log('ROW is Y ' + y + ' --------------------------------------------');
      for (let x = 0; x < gridPattern[0].length; x++) {

        currentCell = gridPattern[y][x];

        const northNeighbor: number = this._getNeighborStatus(gridPattern, currentCell.x, currentCell.y - 1);
        const northEastNeighbor: number = this._getNeighborStatus(gridPattern, currentCell.x + 1, currentCell.y - 1);
        const eastNeighbor: number = this._getNeighborStatus(gridPattern, currentCell.x + 1, currentCell.y);
        const southEastNeighbor: number = this._getNeighborStatus(gridPattern, currentCell.x + 1, currentCell.y + 1);
        const southNeighbor: number = this._getNeighborStatus(gridPattern, currentCell.x, currentCell.y + 1);
        const southWestNeighbor: number = this._getNeighborStatus(gridPattern, currentCell.x - 1, currentCell.y + 1);
        const westNeighbor: number = this._getNeighborStatus(gridPattern, currentCell.x - 1, currentCell.y);
        const northWestNeighbor: number = this._getNeighborStatus(gridPattern, currentCell.x - 1, currentCell.y - 1);

        console.log('COL is X ', x);
        const totalActiveCells = northNeighbor + northEastNeighbor + eastNeighbor + southEastNeighbor + southNeighbor + southWestNeighbor + westNeighbor + northWestNeighbor;

        if (currentCell.status === 1) {
          // Alive
          if (totalActiveCells < 2) {
            //currentCell.status = 0;
            newPattern[y][x] = 0;
            //newPattern[y][x] = new Cell(i, j, 0);
            //newPattern[y][x] = new DeadCell(currentCell.x, currentCell.y);
          }
          if ((totalActiveCells >= 2) && (totalActiveCells <= 3)) {
            //currentCell.status = 1;
            newPattern[y][x] = 1;
          }
          if (totalActiveCells > 3) {
            //currentCell.status = 0;
            newPattern[y][x] = 0;
          }
        } else {
          // Dead
          if (totalActiveCells === 3) {
            newPattern[y][x] = 1;
          }
          else {
            newPattern[y][x] = 0;
          }
        }
      }
    }
    // return new pattern
    console.log('what is the new pattern? ', newPattern);
    return newPattern;
  }

}
