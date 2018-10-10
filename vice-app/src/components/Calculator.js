import React, { Component } from 'react';
import '../styles/Calculator.css';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = {
      background: {
        backgroundColor: 'rgb(32, 32, 32)',
        color: 'white'
      },
      width: {
        width: '90%',
        margin: '5px',
        padding: '5px'
      },
      button: {
        margin: '15px',
        padding: '20px',
        width: '60%'
      }
    };

    return (
      <div className="Calculator">
        <div className="inputs">
          <Paper className="vice-input">
            <TextField
              className="classes.textField"
              label="Name Your Vice"
              type="text"
              name="vice"
              value={this.state.vice}
              margin="normal"
              variant="outlined"
              style={styles.width}
              onChange={this.props.handleInputChange}
            />
            <TextField
              className="vice-input"
              label="Weekly Amount (£)"
              type="number"
              name="amount"
              value={this.state.amount}
              margin="normal"
              variant="outlined"
              style={styles.width}
              onChange={this.props.handleInputChange}
            />
          </Paper>
        </div>
        <Button
          variant="contained"
          color="secondary"
          style={styles.button}
          onClick={this.props.handleOnClick}
        >
          Submit
        </Button>
      </div>
    );
  }
}

export default Calculator;
