import {mount} from 'enzyme';
import Board, {BoardProps} from '.';
import React from 'react';
import BoardDriver from './index.driver';

const renderBoard = (props: BoardProps) => {
  const wrapper = mount(<Board {...props} />);
  
  return new BoardDriver(wrapper);
};

describe('Board', () => {
  it('renders one row', () => {
    const boardDriver = renderBoard({
      gameBoard: [
        [true]
      ],
      onCellClick: jest.fn
    });

    expect(boardDriver.rows).toHaveLength(1);
  });

  it('renders two rows', () => {
    const boardDriver = renderBoard({
      gameBoard: [
        [true],
        [true]
      ],
      onCellClick: jest.fn
    });

    expect(boardDriver.rows).toHaveLength(2);
  });

  it('fires onCellClick when clicking a cell', () => {
    const onCellClick = jest.fn();

    const boardDriver = renderBoard({
      gameBoard: [
        [true]
      ],
      onCellClick
    });

    boardDriver.rowAt(0).cellAt(0).click();

    expect(onCellClick).toBeCalledWith(0, 0);
  });
});
