import React from 'react';

const Cell = ({isAlive, rowIndex, cellIndex, onCellClick}) => {
  return (<div
    data-hook="cell"
    className={isAlive ? 'alive' : ''}
    onClick={() => onCellClick(rowIndex, cellIndex)}
  ></div>);
}

export default Cell;
