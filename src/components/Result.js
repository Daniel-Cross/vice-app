import React, { Component } from 'react';
import '../styles/Result.css';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const commentGenerator = () => {
      const overFiveHundred = [
        "You're doing fine, everything in moderation!",
        'Nothing to see here',
        'Nice work',
        'Fair enough!'
      ];
      const overOneThousand = [
        'You should probably spend that money on therapy, you obviously need it.',
        'Think.. What else could you spend that money on?',
        'Not to bad..'
      ];
      const overTwoThousandFiveHundred = [
        "How do you live with yourself? You're sick, you should definitely get help.",
        'You could travel the world with that kind of money!',
        'Thats a deposit on a small house'
      ];
      const overfiveThousand = [
        'You need to re-think your life choices',
        'Thats a deposit on a large house!',
        'Dont you think that money could of been spent a little better?'
      ];
      const overSevenThousandFiveHundred = [
        'And your parents said you would never amount to anything, look at you now, they must be so proud...',
        "My car didn't cost that much!",
        'You may need to re think so life choices'
      ];
      const overTenThousand = ['Get..Help..Now!', 'Please seek help!', 'R.I.P'];

      const belowFiveHundred = [
        "Good job! We've all got to live a little right? Everything is fine in moderation, everything...",
        'Nothing to see here!',
        'Keep Calm - Carry on!',
        'I wish i was you!'
      ];

      if (this.props.total > 499 && this.props.total < 999) {
        return overFiveHundred[
          Math.floor(Math.random() * overFiveHundred.length)
        ];
      }
      if (this.props.total > 1000 && this.props.total < 2499) {
        return overOneThousand[
          Math.floor(Math.random() * overOneThousand.length)
        ];
      }
      if (this.props.total > 2500 && this.props.total < 4999) {
        return overTwoThousandFiveHundred[
          Math.floor(Math.random() * overTwoThousandFiveHundred.length)
        ];
      }
      if (this.props.total > 5000 && this.props.total < 7499) {
        return overfiveThousand[
          Math.floor(Math.random() * overfiveThousand.length)
        ];
      }
      if (this.props.total > 7500 && this.props.total < 9999) {
        return overSevenThousandFiveHundred[
          Math.floor(Math.random() * overSevenThousandFiveHundred.length)
        ];
      }
      if (this.props.total > 10000) {
        return overTenThousand[
          Math.floor(Math.random() * overTenThousand.length)
        ];
      }
      if (this.props.total < 499) {
        return belowFiveHundred[Math.floor(Math.random() * 4)];
      }
    };

    return (
      <div className="Result">
        <h1 className="result-title">RESULT</h1>
        <div className="result-body">
          <div className="result-1 flow-text">
            <p>
              {`You spend £${this.props.amount} a week on ${this.props.vice}.`}
            </p>
          </div>

          <div className="result-2 flow-text">
            <p>{`That's £${this.props.amount * 4} a month.`}</p>
          </div>

          <div className="result-3 flow-text">
            <p>{`And £${this.props.amount * 52} a year...`}</p>
          </div>
        </div>

        <div className="feedback">
          <span className="ad blink">AD</span>
          <span className="advice">VICE</span>
          <div className="comment">
            <p className="humor flow-text">{commentGenerator()}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
