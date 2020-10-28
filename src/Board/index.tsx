import Cell from '../Cell';

const renderCell = (cell, index) => {
  return <Cell key={index} status={cell} />;
}

const renderRow = (row, index) => {
  return (
    <div key={index}>
      {row.map(renderCell)}
    </div>
  );
};

const renderRows = (board) => {
  if (board.length === 0) return 'Board unavailable';

  return board.map(renderRow);
};

const Board = ({gameBoard = []}) => {
  return renderRows(gameBoard);
};

export default Board;
