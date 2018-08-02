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
    for (let i = 0; i < gridPattern.length; i++) {
      newPattern[i] = [];
      console.log('ROW ' + i + ' --------------------------------------------');
      for (let j = 0; j < gridPattern[0].length; j++) {

        currentCell = gridPattern[i][j];

        const northNeighbor: number = this._getNeighborStatus(gridPattern, currentCell.x, currentCell.y - 1);
        const northEastNeighbor: number = this._getNeighborStatus(gridPattern, currentCell.x + 1, currentCell.y - 1);
        const eastNeighbor: number = this._getNeighborStatus(gridPattern, currentCell.x + 1, currentCell.y);
        const southEastNeighbor: number = this._getNeighborStatus(gridPattern, currentCell.x + 1, currentCell.y + 1);
        const southNeighbor: number = this._getNeighborStatus(gridPattern, currentCell.x, currentCell.y + 1);
        const southWestNeighbor: number = this._getNeighborStatus(gridPattern, currentCell.x - 1, currentCell.y + 1);
        const westNeighbor: number = this._getNeighborStatus(gridPattern, currentCell.x - 1, currentCell.y);
        const northWestNeighbor: number = this._getNeighborStatus(gridPattern, currentCell.x - 1, currentCell.y - 1);

        console.log('COL ', j);
        //console.log('NORTH NEIGHBOR', northNeighbor);
        //console.log('NORTH EAST NEIGHBOR', northEastNeighbor);
        //console.log('EAST NEIGHBOR', eastNeighbor);
        //console.log('SOUTH EAST NEIGHBOR', southEastNeighbor);
        //console.log('SOUTH NEIGHBOR', southNeighbor);
        //console.log('SOUTH WEST NEIGHBOR', southWestNeighbor);
        //console.log('WEST NEIGHBOR', westNeighbor);
        //console.log('NORTH WEST NEIGHBOR', northWestNeighbor);
        // check cell for neighbors
        // update cell status accordingly
        const totalActiveCells = northNeighbor + northEastNeighbor + eastNeighbor + southEastNeighbor + southNeighbor + southWestNeighbor + westNeighbor + northWestNeighbor;

        if (currentCell.status === 1) {
          // Alive
          if (totalActiveCells < 2) {
            //currentCell.status = 0;
            newPattern[i][j] = 0;
          }
          if ((totalActiveCells >= 2) && (totalActiveCells <= 3)) {
            //currentCell.status = 1;
            newPattern[i][j] = 1;
          }
          if (totalActiveCells > 3) {
            //currentCell.status = 0;
            newPattern[i][j] = 0;
          }
        } else {
          // Dead
          if (totalActiveCells === 3) {
            newPattern[i][j] = 1;
          }
          else {
            newPattern[i][j] = 0;
          }
        }
      }
    }
    // return new pattern
    console.log('what is the new pattern? ', newPattern);
    return newPattern;
  }

}
