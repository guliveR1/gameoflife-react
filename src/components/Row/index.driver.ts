import { ReactWrapper } from 'enzyme';
import Cell, { CellProps } from '../Cell';
import CellDriver from '../Cell/index.driver';

class RowDriver {
  constructor(private wrapper: ReactWrapper<any>) {
  }

  get cells(): CellDriver[] {
    return this.wrapper.find(Cell).map(
      (cellWrapper: ReactWrapper<CellProps>) => new CellDriver(cellWrapper)
    );
  }

  cellAt(index: number): CellDriver {
    return new CellDriver(this.wrapper.find(Cell).at(index));
  }
}

export default RowDriver;
