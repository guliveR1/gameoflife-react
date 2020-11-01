import Board from '../Board';
import Controls from '../Controls';
import React from 'react';
import GameModel from './models/game';
import { config } from '../../config';

export interface GameState {
  gameBoard: GameModel
};

export interface GameProps {
  rowSize: number,
  colSize: number
};

class Game extends React.Component<GameProps, GameState> {
  state = {
    gameBoard: new GameModel(this.props.rowSize, this.props.colSize)
  };

  handleCellClick(rowIndex: number, colIndex: number) {
    this.state.gameBoard.toggleCell(rowIndex, colIndex);

    this.setState({
      gameBoard: this.state.gameBoard
    });
  }

  handleStep() {
    this.state.gameBoard.step();

    this.setState({
      gameBoard: this.state.gameBoard
    });
  }

  handleRun() {
    setInterval(this.handleStep.bind(this), config.runInterval);
  }

  render() {
    return (
      <div>
        <Board data-hook="board" gameBoard={this.state.gameBoard.board} onCellClick={this.handleCellClick.bind(this)} />
        <Controls data-hook="controls" onStep={this.handleStep.bind(this)} onRun={(this.handleRun.bind(this))} />
      </div>
    );
  }
}

export default Game;
