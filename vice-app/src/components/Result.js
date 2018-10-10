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

    const feedbackLoop = () => {
      if (this.props.amount * 52 > 499) {
        return (
          <p className="humor">
            Could be worse, the guy before you was spending £10,000 a year on
            cucumbers. We don't ask questions...
          </p>
        );
      } else if (this.props.amount * 52 > 999) {
        return (
          <p className="humor">
            You should probably spend that money on therapy, you obviously need
            it.
          </p>
        );
      } else if (this.props.amount * 52 > 2499) {
        return (
          <p className="humor">
            How do you live with yourself? You're sick, you should definitely
            get help.
          </p>
        );
      } else if (this.props.amount * 52 > 4999) {
        return (
          <p className="humor">
            WTF! Seriously!? Wow... you're a special kind of pervert... and your
            parents said you would never amount to anything, look at you now,
            they must be so proud.
          </p>
        );
      } else if (this.props.amount * 52 > 7499) {
        return (
          <p className="humor">
            And your parents said you would never amount to anything, look at
            you now, they must be so proud...
          </p>
        );
      } else if (this.props.amount * 52 > 9999) {
        return (
          <p className="humor">
            You are going to die very soon. Probably for the best because you
            have no friends and no one likes you anyway.
          </p>
        );
      } else {
        return (
          <p className="humor">
            Good job! We've all got to live a little right? Everything is fine
            in moderation!
          </p>
        );
      }
    };

    return (
      <div className="Result">
        <h1 className="result-title" style={styles.background}>
          RESULT
        </h1>
        {/* <div className="result-body">
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
        </div> */}
        <div className="feedback">
          <span className="ad">AD</span>
          <span className="advice">VICE</span>
          {feedbackLoop()}
        </div>
      </div>
    );
  }
}

export default Result;
