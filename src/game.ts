import { Cell } from './cell';
import { GridBuilder } from './grid-builder';
import { GridRenderer } from './grid-renderer';
import { GridManager } from './grid-manager';

export class Game {

  private _grid;
  private _gridBuilder: GridBuilder = new GridBuilder();
  private _gridRenderer: GridRenderer = new GridRenderer();
  private _gridManager: GridManager = new GridManager();

  constructor(private startingPattern: Array<Array<number>>) {
    this._grid = this._gridBuilder.build(startingPattern);
  }

  update() {

    let gridPattern = this._gridManager.update(this._grid);
    this._grid = this._gridBuilder.build(gridPattern);
  }

  drawGrid() {
    return this._gridRenderer.render(this._grid);
  }
}
