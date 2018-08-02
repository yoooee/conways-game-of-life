export class GridRenderer {

  constructor() { }

  render(gridToRender): string {

    const numberOfRows = gridToRender.length;
    const numberOfCols = gridToRender[0].length;

    let gridString: string = '';

    for(let row: number = 0; row < numberOfRows; row++) {
      gridString += '<div class="row">';

      for(let col: number = 0; col < numberOfCols; col++){
        gridString += `<div class="col status_${gridToRender[row][col].status}"></div>`;
      }
      gridString += '</div>';
    }
    return gridString;
  }
  // Do some map methods
}
