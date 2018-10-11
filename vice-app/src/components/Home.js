import React, { Component } from 'react';
import '../styles/Home.css';
import Logo from './Logo';
import Calculator from './Calculator';
import Result from './Result';
import Item from './Item';
import ItemResult from './ItemResult';
import { css } from 'react-emotion';
import { BarLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vice: '',
      amount: 0,
      item: '',
      save: 0,
      viceInput: true,
      showItemResult: false,
      loading: true,
      showResult: false,
      revealResult: false
    };
    this.interval = null;
  }

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleOnClick = () => {
    if (
      this.state.amount && this.state.vice
        ? this.setState(state => ({ viceInput: !state.viceInput }))
        : null
    );

    this.setState({ renderResult: true });

    this.interval = setTimeout(
      () => this.setState({ renderResult: false }),
      5000
    );

    setTimeout(() => this.setState({ showResult: true }), 5000);
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
        {this.state.viceInput ? (
          <Calculator
            handleInputChange={this.handleInputChange}
            handleOnClick={this.handleOnClick}
          />
        ) : null}

        {this.state.renderResult ? (
          <div className="sweet-loading">
            <p>Hold on, just emailing your boss...</p>
            <BarLoader
              className={override}
              heightUnit={'px'}
              height={10}
              widthUnit={'%'}
              width={80}
              color={'#FF69B4'}
              loading={this.state.loading}
            />
          </div>
        ) : null}

        {this.state.showResult ? (
          <Result
            vice={this.state.vice}
            amount={this.state.amount}
            result={this.state.showResult}
          />
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
