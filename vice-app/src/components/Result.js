import React, { Component } from 'react';
import '../styles/Result.css';

class Result extends Component {
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
      }
    };
    return (
      <div className="Result">
        <h1 className="result-title" style={styles.background}>
          Result
        </h1>
        <div className="result-body">
          <div className="result-1">
            <p>
              {`You spend £${this.props.amount} a week on ${this.props.vice}.`}
            </p>
          </div>
          <div className="result-2">
            <p>{`That's £${this.props.amount * 4} a month.`}</p>
          </div>
          <div className="result-3">
            <p>{`And £${this.props.amount * 52} a year...`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
