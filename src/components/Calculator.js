import React, { Component } from 'react';
import '../styles/Calculator.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Input } from 'react-materialize';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = {
      // width: {
      //   width: '90%',
      //   margin: '8px',
      //   padding: '8px',
      //   Color: '#ffffff'
      // },
      button: {
        margin: '15px',
        padding: '20px',
        width: '60%'
      }
    };

    return (
      <div className="Calculator">
        <div className="inputs">
          <Input
            s={6}
            label="Name Your Vice"
            type="text"
            name="vice"
            style={styles.width}
            onChange={this.props.handleInputChange}
            value={this.props.vice}
          />

          <Input
            s={6}
            label="Weekly Amount (£)"
            type="number"
            name="amount"
            style={styles.width}
            onChange={this.props.handleInputChange}
            value={this.props.amount}
          />

          {/* <TextField
            label="Name Your Vice"
            type="text"
            name="vice"
            value={this.props.vice}
            variant="outlined"
            style={styles.width}
            onChange={this.props.handleInputChange}
          /> */}
          {/* <TextField
            label="Weekly Amount (£)"
            type="number"
            name="amount"
            value={this.props.amount}
            variant="outlined"
            style={styles.width}
            onChange={this.props.handleInputChange}
          /> */}

          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={this.props.handleOnClick}
            type="submit"
          >
            Make Me Feel Bad
          </Button>
        </div>
      </div>
    );
  }
}

export default Calculator;
