import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Logo from './components/Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Home />
      </div>
    );
  }
}

export default App;
