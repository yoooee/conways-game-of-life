import { GridRenderer } from './grid-renderer';
import { mockGridMarkup } from './test-helper';

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

        const gridRenderer = new GridRenderer();
        const renderedGrid = gridRenderer.render(gridToRender);

        expect(renderedGrid).toContain('0');
        expect(renderedGrid).not.toContain('1');
        expect(renderedGrid).toEqual(mockGridMarkup(3, 3, 0));
      });
    });

    describe('when supplied a grid of all live cells', () => {

      it('should output an html grid with all ones', () => {

        const gridToRender: Array<Array<{status: number}>> = [
          [ { status: 1 }, { status: 1 }, { status: 1 } ],
          [ { status: 1 }, { status: 1 }, { status: 1 } ],
          [ { status: 1 }, { status: 1 }, { status: 1 } ]
        ];

        const gridRenderer = new GridRenderer();
        const renderedGrid = gridRenderer.render(gridToRender);

        expect(renderedGrid).toContain('1');
        expect(renderedGrid).not.toContain('0');
        expect(renderedGrid).toEqual(mockGridMarkup(3, 3, 1));
      });
    });
  });
});
