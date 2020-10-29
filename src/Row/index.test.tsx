import {mount} from 'enzyme';
import Row from '.';
import RowDriver from './index.driver';

const renderRow = (props) => {
  const wrapper = mount(<Row />);

  return new RowDriver(wrapper);
};

describe('Row', () => {
  it('renders 1 cell', () => {
    const rowDriver = renderRow({
      cells: [true]
    });

    expect(rowDriver.cells).toHaveLength(1);
  });

  it('renders 3 cells', () => {
    const rowDriver = renderRow({
      cells: [true, true, true]
    });

    expect(rowDriver.cells).toHaveLength(3);
  });

  it('renders 2 alive cells', () => {
    const rowDriver = renderRow({
      cells: [true, true]
    });

    rowDriver.cells.forEach(cell => expect(cell.isAlive).toBeTruthy());
  });
});
