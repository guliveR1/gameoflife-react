import Cell from '../Cell';
import React from 'react';

const renderCell = (isAlive: boolean, index: number) => {
  return <Cell key={index} isAlive={isAlive} />;
}

const renderRow = (row: boolean[], index: number) => {
  return (
    <div key={index}>
      {row.map(renderCell)}
    </div>
  );
};

const renderRows = (board: boolean[][]) => {
  if (board.length === 0) return 'Board unavailable';

  return board.map(renderRow);
};

const Board = ({gameBoard = []}) => {
  return <>{renderRows(gameBoard)}</>;
};

export default Board;
