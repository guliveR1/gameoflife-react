import {shallow} from 'enzyme';
import Board from '.';
import Cell from '../Cell';

const renderBoard = (board) => {
  return shallow(<Board gameBoard={board} />);
};

describe('Board', () => {
  it('renders "Board unavailable" when gameBoard is undefined', () => {
    const boardWrapper = renderBoard();

    expect(boardWrapper.text()).toEqual('Board unavailable');
  });

  it('renders 1 row div when gameBoard row size is 1', () => {
    const boardWrapper = renderBoard([
      [1]
    ]);
    const rowDivs = boardWrapper.find('div');

    expect(rowDivs).toHaveLength(1);
  });

  it('renders 2 row div when gameBoard row size is 2', () => {
    const boardWrapper = renderBoard([
      [1],
      [1]
    ]);
    const rowDivs = boardWrapper.find('div');

    expect(rowDivs).toHaveLength(2);
  });

  it('renders one Cell when gameBoard size is 1x1', () => {
    const boardWrapper = renderBoard([[1]]);
    const cells = boardWrapper.find(Cell);

    expect(cells).toHaveLength(1);
  });

  it('renders four Cells when gameBoard size is 2x2', () => {
    const boardWrapper = renderBoard([
      [1, 1],
      [1, 1]
    ]);
    const cells = boardWrapper.find(Cell);

    expect(cells).toHaveLength(4);
  });

  it('renders cells with value as status prop', () => {
    const boardWrapper = renderBoard([
      [1, 1],
      [1, 1]
    ]);
    const cells = boardWrapper.find(Cell);

    cells.forEach(cell => expect(cell.props().isAlive).toEqual(1));
  });
});
