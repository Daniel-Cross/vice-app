import React, { Component } from 'react';
import '../styles/Home.css';
import Logo from './Logo';
import Calculator from './Calculator';
import Result from './Result';
import Item from './Item';
import ItemResult from './ItemResult';
import { css } from 'react-emotion';
import { BarLoader } from 'react-spinners';
import Button from '@material-ui/core/Button';
import Facebook from './Facebook';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const styles = {
  button: {
    margin: '15px',
    padding: '20px',
    width: '20%'
  },
  login: {
    padding: '5px',
    marginTop: '100px'
  }
};

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
      yearTotal: 0,
      renderResult: null,
      renderItemResult: null,
      showMore: false,
      showMoreButton: false,
      isLoggedIn: false,
      userId: '',
      name: '',
      email: '',
      picture: ''
    };
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

    this.setState({ yearTotal: this.state.amount * 52 });

    setTimeout(
      () => this.setState({ renderResult: false, showResult: false }),
      2500
    );

    setTimeout(
      () => this.setState({ showResult: true, showMoreButton: true }),
      2500
    );
  };

  handleOnItemClick = () => {
    if (
      this.state.item && this.state.save
        ? this.setState(state => ({ showMore: !state.showMore }))
        : null
    );

    this.setState({ renderItemResult: true });

    setTimeout(
      () => this.setState({ renderItemResult: false, loading: false }),
      5000
    );

    setTimeout(() => this.setState({ showItemResult: true }), 5000);
  };

  handleResetClick = () => {
    window.location.reload();
  };

  handleShowMoreOnClick = () => {
    this.setState({
      showMoreButton: false,
      showMore: true
    });
  };

  responseFacebook = response => {
    this.setState({
      isLoggedIn: true,
      userId: response.userId,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      userId: '',
      name: '',
      email: '',
      picture: ''
    });
  };

  handleAddClick = () => {
    this.setState({});
  };

  render() {
    return (
      <div className="Home">
        <Logo />
        {this.state.viceInput ? (
          <div className="landing">
            <Calculator
              handleInputChange={this.handleInputChange}
              handleOnClick={this.handleOnClick}
              isLoggedIn={this.state.isLoggedIn}
              handleAddClick={this.handleAddClick}
            />
            <Facebook
              responseFacebook={this.responseFacebook}
              userId={this.state.userId}
              isLoggedIn={this.state.isLoggedIn}
              name={this.state.name}
              email={this.state.email}
              picture={this.state.picture}
              handleLogout={this.handleLogout}
            />
          </div>
        ) : null}
        {this.state.renderResult ? (
          <div className="sweet-loading">
            {/*<p>Hold on, just emailing your boss...</p>*/}
            <p className="flow-text">Calculating..</p>

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
            advice={this.state.advice}
            total={this.state.yearTotal}
          />
        ) : null}
        {this.state.showMoreButton ? (
          <Button
            variant="outlined"
            color="primary"
            style={styles.button}
            onClick={this.handleShowMoreOnClick}
            type="submit"
          >
            Are you saving for something?{' '}
          </Button>
        ) : null}
        {this.state.showMore ? (
          <Item
            handleInputChange={this.handleInputChange}
            handleOnItemClick={this.handleOnItemClick}
          />
        ) : null}
        {this.state.renderItemResult ? (
          <div className="sweeter-loading">
            <p>Calculating...</p>
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
        {this.state.showItemResult ? (
          <ItemResult
            item={this.state.item}
            save={this.state.save}
            amount={this.state.amount}
            vice={this.state.vice}
          />
        ) : null}
        {this.state.showResult ? (
          <Button
            className="Reset"
            variant="outlined"
            color="secondary"
            style={styles.button}
            onClick={this.handleResetClick}
            type="submit"
          >
            Start again
          </Button>
        ) : null}
      </div>
    );
  }
}

export default Home;
