import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

class App extends Component {
  constructor() {
    super();
    this.state = this.getInitialState();
  };

getInitialState() {
  return {
    selColorIdx: 0,
    guesses: [this.getNewGuess()],
    code: this.genCode(),
  };
}
getNewGuess() {
  return {
    code: [null, null, null, null],
    score: {
      perfect: 0,
      almost: 0,
    }
  }
};
genCode() {
  return new Array(4).fill().map(() => Math.floor(Math.random() * colors.length));
};
getWinTries() {
  let lastGuess = this.state.guesses.length - 1;
  return this.state.guesses[lastGuess].score.perfect === 4 ? lastGuess + 1 : 0;
}
handleColorSelection = (colorIdx) => {
  this.setState({selColorIdx: colorIdx});
}
handleNewGameClick = () => {
  this.setState(this.getInitialState());
}
handlePegClick = (pegIdx) => {
  let currentGuessIdx = this.state.guesses.length - 1;
  let guessesCopy = [...this.state.guesses];
  let guessCopy = {...guessCopy[currentGuessIdx]};
  let codeCopy = this.state.selColorIdx;
    codeCopy[pegIdx] = this.state.selColorIdx;
    guessCopy.code = codeCopy;
    guessesCopy[currentGuessIdx] = guessCopy;
    this.setState({
      guesses: guessesCopy
    });
}
handleScoreClick
//


  render() {
    let winTries = this.getWinTries();
      return (
      <div className="App">
        <header className="App-header-footer">R e a c t &nbsp;&nbsp;&nbsp;  M a s t e r m i n d</header>
      
        <div className="flex-h align-flex-end">
          <GameBoard colors={colors} guesses={this.state.guesses}
          />
          <div>
            <ColorPicker 
              colors={colors} 
              selColorIdx={this.state.selColorIdx}
              handleColorSelection={this.handleColorSelection}
            />
            <GameTimer />
            <NewGameButton />
          </div>
        </div>
        <footer className='App-header-footer'>
          {(winTries ? `You Won in ${winTries} Guesses!` : 'Good Luck!')}
        </footer>
      </div>
    );
  }
}


export default App;