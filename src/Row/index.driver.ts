import Cell from '../Cell';
import CellDriver from '../Cell/index.driver';

class RowDriver {
  constructor(private wrapper) {
  }

  get cells() {
    return this.wrapper.find(Cell).map(cellWrapper => new CellDriver(cellWrapper));
  }

  cellAt(index) {
    return this.wrapper.find(Cell).at(index);
  }
}

export default RowDriver;
