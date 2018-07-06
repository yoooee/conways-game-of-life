import { GridRenderer } from './grid-renderer';

describe('Grid Renderer', () => {

  // GridRenderer should take a grid of cells and return markup to render the grid.

  describe('render', () => {

    describe('when supplied a grid of all dead cells', () => {

      it('should output an html grid with all zeros', () => {

        const gridToRender: Array<Array<{status: number}>> = [
          [ { status: 0 }, { status: 0 }, { status: 0 } ],
          [ { status: 0 }, { status: 0 }, { status: 0 } ],
          [ { status: 0 }, { status: 0 }, { status: 0 } ]
        ];

        const gridRenderer = new GridRenderer(gridToRender);
        const renderedGrid = gridRenderer.render();

        expect(renderedGrid).toContain('<div class="col">0</div>');
        expect(renderedGrid).not.toContain('<div class="col">1</div>');
      });
    });

    describe('when supplied a grid of all live cells', () => {

      it('should output an html grid with all ones', () => {

        const gridToRender: Array<Array<{status: number}>> = [
          [ { status: 1 }, { status: 1 }, { status: 1 } ],
          [ { status: 1 }, { status: 1 }, { status: 1 } ],
          [ { status: 1 }, { status: 1 }, { status: 1 } ]
        ];

        const gridRenderer = new GridRenderer(gridToRender);
        const renderedGrid = gridRenderer.render();

        expect(renderedGrid).toContain('<div class="col">1</div>');
        expect(renderedGrid).not.toContain('<div class="col">0</div>');
      });
    });
  });
});
