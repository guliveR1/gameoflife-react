import {shallow} from 'enzyme';
import Cell from '.';
import CellDriver from './index.driver';

const renderCell = (props) => {
  const wrapper = shallow(<Cell {...props} />);

  return new CellDriver(wrapper);
};

describe('Cell', () => {
  it('renders without crashing', () => {
    const cellWrapper = shallow(<Cell />);
    const block = cellWrapper.find('div');

    expect(block).toHaveLength(1);
  });

  it('renders alive cell', () => {
    const cellDriver = renderCell({isAlive: true});

    expect(cellDriver.isAlive).toBeTruthy();
  });

  it('renders dead cell', () => {
    const cellDriver = renderCell({isAlive: false});

    expect(cellDriver.isAlive).toBeFalsy();
  });

  it('fires onCellClick when clicking cell with rowIndex and cellIndex', () => {
    const onCellClick = jest.fn();

    const cellDriver = renderCell({
      isAlive: false,
      rowIndex: 0,
      cellIndex: 0,
      onCellClick
    });

    cellDriver.click();

    expect(onCellClick).toBeCalledWith(0, 0);
  });
});
