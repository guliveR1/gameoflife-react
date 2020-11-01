import {mount} from 'enzyme';
import Row, {RowProps} from '.';
import RowDriver from './index.driver';
import React from 'react';

const renderRow = (props: RowProps) => {
  const wrapper = mount(<Row {...props} />);

  return new RowDriver(wrapper);
};

describe('Row', () => {
  it('renders 1 cell', () => {
    const rowDriver = renderRow({
      cells: [true],
      rowIndex: 0,
      onCellClick: jest.fn
    });

    expect(rowDriver.cells).toHaveLength(1);
  });

  it('renders 3 cells', () => {
    const rowDriver = renderRow({
      cells: [true, true, true],
      rowIndex: 0,
      onCellClick: jest.fn
    });

    expect(rowDriver.cells).toHaveLength(3);
  });

  it('renders 1 alive cells and 1 dead cell', () => {
    const rowDriver = renderRow({
      cells: [true, false],
      rowIndex: 0,
      onCellClick: jest.fn
    });

    expect(rowDriver.cellAt(0).isAlive).toBeTruthy();
    expect(rowDriver.cellAt(1).isAlive).toBeFalsy();
  });

  it('fires onCellClick when clicking cell', () => {
    const onCellClick = jest.fn();

    const rowDriver = renderRow({
      cells: [true],
      rowIndex: 0,
      onCellClick
    });

    rowDriver.cellAt(0).click();

    expect(onCellClick).toBeCalledWith(0, 0);
  });
});
