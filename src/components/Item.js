import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import '../styles/Item.css';

class Item extends Component {
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
      <div className="Item">
        <div className="inputs">
          <h1 className="desire">WANT SOMETHING?</h1>
          <TextField
            className="classes.textField"
            label="Item You're Saving For"
            type="text"
            name="item"
            value={this.state.item}
            margin="normal"
            variant="outlined"
            style={styles.width}
            onChange={this.props.handleInputChange}
          />
          <TextField
            className="item-input"
            label="Amount Needed (£)"
            type="number"
            name="save"
            value={this.state.save}
            margin="normal"
            variant="outlined"
            style={styles.width}
            onChange={this.props.handleInputChange}
          />
          <Button
            variant="contained"
            color="secondary"
            style={styles.button}
            onClick={this.props.handleOnItemClick}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default Item;
