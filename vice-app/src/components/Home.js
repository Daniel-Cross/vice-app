import React, { Component } from 'react';
import '../styles/Home.css';
import Logo from './Logo';
import Calculator from './Calculator';
import Result from './Result';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vice: '',
      amount: 0
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="Home">
        <Logo />
        <Calculator handleInputChange={this.handleInputChange} />
        <Result vice={this.state.vice} amount={this.state.amount} />
      </div>
    );
  }
}

export default Home;
