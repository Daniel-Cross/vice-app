import React, { Component } from 'react';
import '../styles/Home.css';
import Logo from './Logo';
import Calculator from './Calculator';
import Result from './Result';
import Item from './Item';
import ItemResult from './ItemResult';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  placeholder: {
    height: 40
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vice: '',
      amount: 0,
      item: '',
      save: 0,
      showResult: false,
      showItemResult: false,
      loading: false,
      query: 'idle'
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleClickLoading = () => {
    this.setState(state => ({
      loading: !state.loading
    }));
  };

  handleClickQuery = () => {
    clearTimeout(this.timer);
    if (this.state.query !== 'idle') {
      this.setState({
        query: 'idle'
      });
      return;
    }

    this.setState({
      query: 'progress'
    });
    this.timer = setTimeout(() => {
      this.setState({
        query: 'success'
      });
    }, 2e3);
  };

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
    const { classes } = this.props;
    const { loading, query } = this.state;

    return (
      <div className="Home">
        <Logo />
        <Calculator
          handleInputChange={this.handleInputChange}
          handleOnClick={this.handleOnClick}
          handleClickQuery={this.handleClickQuery}
        />
        <div className="load-bar">
          {query === 'success' ? (
            <Typography>Success!</Typography>
          ) : (
            <Fade
              in={query === 'progress'}
              style={{
                transitionDelay: query === 'progress' ? '10ms' : '0ms'
              }}
              unmountOnExit
            >
              <CircularProgress />
            </Fade>
          )}
        </div>

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
