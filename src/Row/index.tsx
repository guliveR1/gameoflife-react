import Cell from '../Cell';
import React from 'react';

export interface RowProps {
  rowIndex: number,
  onCellClick: (rowIndex: number, cellIndex: number) => void,
  cells: boolean[]
}

const Row = ({rowIndex, cells, onCellClick}: RowProps) => {
  const handleCellClick = (cellIndex: number) => {
    onCellClick(rowIndex, cellIndex);
  }

  const renderCells = (cells: boolean[] = []) => {
    return cells.map((cell, index) => 
      <Cell 
        key={index} 
        isAlive={cell} 
        cellIndex={index} 
        onCellClick={handleCellClick} 
      />
    );
  };

  return <>{renderCells(cells)}</>;
};

export default Row;
