import React, { Component } from 'react';
import '../styles/Home.css';
import Logo from './Logo';
import Calculator from './Calculator';
import Result from './Result';
import Item from './Item';
import ItemResult from './ItemResult';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vice: '',
      amount: 0,
      item: '',
      save: 0,
      showResult: false,
      showItemResult: false
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

  handleOnItemClick = () => {
    if (
      this.state.item && this.state.save
        ? this.setState(state => ({ showItemResult: !state.showItemResult }))
        : null
    );
  };

  render() {
    return (
      <div className="Home">
        <Logo />
        {!this.state.showResult ? (
          <Calculator
            handleInputChange={this.handleInputChange}
            handleOnClick={this.handleOnClick}
          />
        ) : null}

        {this.state.showResult ? (
          <Result vice={this.state.vice} amount={this.state.amount} />
        ) : null}
        {this.state.showResult ? (
          <Item
            handleInputChange={this.handleInputChange}
            handleOnItemClick={this.handleOnItemClick}
          />
        ) : null}
        {this.state.showItemResult ? (
          <ItemResult
            item={this.state.item}
            save={this.state.save}
            amount={this.state.amount}
            vice={this.state.vice}
          />
        ) : null}
      </div>
    );
  }
}

export default Home;
