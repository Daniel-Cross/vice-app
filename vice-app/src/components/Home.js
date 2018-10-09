import React, { Component } from 'react';
import '../styles/Home.css';
import Logo from './Logo';
import Calculator from './Calculator';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Home">
        <Logo />
        <Calculator />
      </div>
    );
  }
}

export default Home;
