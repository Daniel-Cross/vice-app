import React, { Component } from 'react';
import '../styles/Calculator.css';
import Button from '@material-ui/core/Button';
import { Input } from 'react-materialize';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = {
      button: {
        margin: '20px',
        padding: '20px',
        width: '70%'
      }
    };

    // let add;
    // if (this.props.isLoggedIn) {
    //   add = (
    //     <div className="add">
    //       <a
    //         className="btn-floating waves-effect waves-light pink"
    //         onClick={this.props.handleAddClick}
    //       >
    //         <i className="material-icons">add</i>
    //       </a>
    //     </div>
    //   );
    // } else {
    //   add = null;
    // }

    return (
      <div className="Calculator">
        <div className="inputs">
          <Input
            s={6}
            required
            label="Name Your Vice"
            type="text"
            name="vice"
            style={styles.width}
            onChange={this.props.handleInputChange}
            value={this.props.vice}
          />

          <Input
            s={6}
            required
            label="Weekly Amount (£)"
            type="number"
            name="amount"
            style={styles.width}
            onChange={this.props.handleInputChange}
            value={this.props.amount}
          />

          <div className="buttons">
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
      </div>
    );
  }
}

export default Calculator;
