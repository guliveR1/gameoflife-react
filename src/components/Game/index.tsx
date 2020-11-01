import Board from '../Board';
import Controls from '../Controls';
import React from 'react';
import GameModel from './models/game';
import { config } from '../../config';
import './index.css';

export interface GameState {
  gameBoard: GameModel,
  runInterval?: any
};

export interface GameProps {
  rowSize: number,
  colSize: number
};

class Game extends React.Component<GameProps, GameState> {
  state: GameState = {
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
    const runInterval = setInterval(this.handleStep.bind(this), config.runInterval);

    this.setState({runInterval});
  }

  handleClear() {
    this.setState({
      gameBoard: new GameModel(this.props.rowSize, this.props.colSize)
    });
  }

  handleStop() {
    if (this.state.runInterval) {
      clearInterval(this.state.runInterval);

      this.setState({runInterval: undefined});
    }
  }

  render() {
    return (
      <div className="game">
        <Board 
          data-hook="board" 
          gameBoard={this.state.gameBoard.board} 
          onCellClick={this.handleCellClick.bind(this)} 
        />
        <Controls 
          data-hook="controls" 
          onStep={this.handleStep.bind(this)} 
          onRun={this.handleRun.bind(this)} 
          onClear={this.handleClear.bind(this)}
          onStop={this.handleStop.bind(this)}
        />
      </div>
    );
  }
}

export default Game;
