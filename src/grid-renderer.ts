export class GridRenderer {

  _numberOfRows: number;
  _numberOfCols: number;

  constructor(private _gridToRender) {
    this._numberOfRows = _gridToRender.length;
    this._numberOfCols = _gridToRender[0].length;
  }

  render(): string {

    let gridString: string = '';

    for(let row: number = 0; row < this._numberOfRows; row++) {
      gridString += '<div class="row">';

      for(let col: number = 0; col < this._numberOfCols; col++){
        gridString += '<div class="col">' + this._gridToRender[row][col].status + '</div>';
      }
      gridString += '</div>';
    }

    return gridString;
  }
}
