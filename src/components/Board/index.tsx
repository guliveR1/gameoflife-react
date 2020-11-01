import Row from '../Row';
import React from 'react';

export interface BoardProps {
  gameBoard: boolean[][],
  onCellClick: (rowIndex: number, cellIndex: number) => void
}

const Board = ({gameBoard = [], onCellClick}: BoardProps) => {
  const renderRows = () => {
    return gameBoard.map((cells, rowIndex) => 
      <Row 
        key={rowIndex} 
        rowIndex={rowIndex} 
        cells={cells} 
        onCellClick={onCellClick}
      />
    )
  };

  return <>{renderRows()}</>;
};

export default Board;
