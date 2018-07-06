import { Cell } from './cell';
import { GridBuilder } from './grid-builder';
import { GridRenderer } from './grid-renderer';

export class Game {

  private _grid = [];
  private _startingGrid;
  private _gridBuilder: GridBuilder = new GridBuilder();
  private _gridRenderer: GridRenderer;

  constructor(private _startingPattern: Array<Array<number>>) {
    this._startingGrid = this._gridBuilder.build(_startingPattern);
    this._gridRenderer = new GridRenderer(this._startingGrid);
  }

  get numberOfRows() {
    console.log('rows ', this._startingGrid.length);
    return this._startingGrid.length;
  }

  get numberOfCols() {
    console.log('cols ', this._startingGrid[0].length);
    return this._startingGrid[0].length;
  }

  drawGrid() {
    return this._gridRenderer.render();
  }
}
