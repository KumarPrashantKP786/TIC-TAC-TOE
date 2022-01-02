import React from 'react';
import './App.css';
import Game from './components/game';

class App extends React.Component {
  render(){
    return(
      <div>
      <h1>TicTacToe</h1>
      <Game/>
      </div>
    )
  }
}

export default App;
