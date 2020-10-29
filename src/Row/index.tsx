import Cell from '../Cell';
import React from 'react';

const renderCells = (cells = []) => {
  return cells.map((cell, index) => <Cell key={index} />);
};

//const Row = ({cells}) => renderCells(cells);
const Row = () => null

export default Row;
