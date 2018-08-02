export const mockGridMarkup = (rows: number, cols: number, cellStatus: number) => {

  let output: string = '';

  for (let i = 0; i < rows; i++) {

    output += '<div class="row">'
    for (let j = 0; j < cols; j++) {

      output += `<div class="col status_${cellStatus}"></div>`
    }
    output += '</div>'
  }

  return output;
}
