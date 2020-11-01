import React from 'react';
import './index.css';

export interface CellProps {
  isAlive: boolean,
  cellIndex: number,
  onCellClick: (index: number) => void
}

const Cell = ({isAlive, cellIndex, onCellClick}: CellProps) => {
  return (<div
    data-hook="cell"
    className={'cell' + (isAlive ? ' alive' : '')}
    onClick={() => onCellClick(cellIndex)}
  ></div>);
}

export default Cell;
