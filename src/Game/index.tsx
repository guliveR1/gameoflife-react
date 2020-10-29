import Board from '../Board';
import Controls from '../Controls';
import React from 'react';

class Game extends React.Component {
  state = {
    gameBoard: []
  };

  render() {
    return (
      <div>
        <Board gameBoard={this.state.gameBoard} />
        <Controls />
      </div>
    );
  }
}

export default Game;