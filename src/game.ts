import { Cell } from './cell';
import { GridBuilder } from './grid-builder';
import { GridRenderer } from './grid-renderer';
import { GridManager } from './grid-manager';
import { Grid, GridPattern } from './models';

export class Game {

  private _grid: Grid;

  constructor(
    startingPattern: GridPattern,
    private _gridBuilder: GridBuilder = new GridBuilder(),
    private _gridRenderer: GridRenderer = new GridRenderer(),
    private _gridManager: GridManager = new GridManager(),
  ) {
    this._grid = this._gridBuilder.build(startingPattern);
  }

  update() {

    const gridPattern: GridPattern = this._gridManager.update(this._grid);
    this._grid = this._gridBuilder.build(gridPattern);
  }

  drawGrid() {
    return this._gridRenderer.render(this._grid);
  }
}
