import React, { Component } from 'react';
import '../styles/Home.css';
import Logo from './Logo';
import Calculator from './Calculator';
import Result from './Result';
import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vice: '',
      amount: 0,
      showResult: false
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleOnClick = () => {
    if (
      this.state.amount && this.state.vice
        ? this.setState(state => ({ showResult: !state.showResult }))
        : null
    );
  };

  render() {
    return (
      <div className="Home">
        <Logo />
        <Calculator
          handleInputChange={this.handleInputChange}
          handleOnClick={this.handleOnClick}
        />
        {this.state.showResult ? (
          <Result vice={this.state.vice} amount={this.state.amount} />
        ) : null}
      </div>
    );
  }
}

export default Home;
