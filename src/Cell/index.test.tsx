import {mount, shallow} from 'enzyme';
import Cell, {CellProps} from '.';
import CellDriver from './index.driver';
import React from 'react';

const renderCell = (props: CellProps) => {
  const wrapper = mount(<Cell {...props} />);

  return new CellDriver(wrapper);
};

describe('Cell', () => {
  it('renders without crashing', () => {
    const cellWrapper = shallow(<Cell isAlive={true} cellIndex={0} onCellClick={jest.fn} />);
    const block = cellWrapper.find('div');

    expect(block).toHaveLength(1);
  });

  it('renders alive cell', () => {
    const cellDriver = renderCell({isAlive: true, cellIndex: 0, onCellClick: jest.fn});

    expect(cellDriver.isAlive).toBeTruthy();
  });

  it('renders dead cell', () => {
    const cellDriver = renderCell({isAlive: false, cellIndex: 0, onCellClick: jest.fn});

    expect(cellDriver.isAlive).toBeFalsy();
  });

  it('fires onCellClick when clicking cell with rowIndex and cellIndex', () => {
    const onCellClick = jest.fn();

    const cellDriver = renderCell({
      isAlive: false,
      cellIndex: 0,
      onCellClick
    });

    cellDriver.click();

    expect(onCellClick).toBeCalledWith(0);
  });
});
