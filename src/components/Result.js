import React, { Component } from "react";
import "../styles/Result.css";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const commentGenerator = () => {
      const overFiveHundred = [
        "Could be worse, the guy before you was spending £10,000 a year on cucumbers. We don't ask questions...",
        "You're doing fine, everything in moderation!",
        "Nothing to see here",
        "Nice work",
        "Fair enough!"
      ];
      const overOneThousand = [
        "You should probably spend that money on therapy, you obviously need it.",
        "Think.. What else could you spend that money on?",
        "Not to bad.."
      ];
      const overTwoThousandFiveHundred = [
        "How do you live with yourself? You're sick, you should definitely get help.",
        "You could travel the world with that kind of money!",
        "Thats a deposit on a small house"
      ];
      const overfiveThousand = [
        "WTF! Seriously!? Wow... you're a special kind of pervert... and your parents said you would never amount to anything, look at you now, they must be so proud.",
        "Thats a deposit on a large house!",
        "Dont you think that money could of been spent a little better?"
      ];
      const overSevenThousandFiveHundred = [
        "And your parents said you would never amount to anything, look at you now, they must be so proud...",
        "My car didn't cost this much",
        "You may need to re think so life choices"
      ];
      const overTenThousand = [
        "You are going to die very soon. Probably for the best because you have no friends and no one likes you anyway.",
        "Get..Help..Now!",
        "Please seek help!",
        "R.I.P"
      ];
      const belowFiveHundred = [
        "Good job! We've all got to live a little right? Everything is fine in moderation, everything...",
        "Noting to see here!",
        "Keep Calm - Carry on!",
        "I wish i was you!"
      ];

      if (this.props.total > 499 && this.props.total < 999) {
        return overFiveHundred[
          Math.floor(Math.random() * overFiveHundred.length + 1)
        ];
      }
      if (this.props.total > 1000 && this.props.total < 2499) {
        return overOneThousand[
          Math.floor(Math.random() * overOneThousand.length + 1)
        ];
      }
      if (this.props.total > 2500 && this.props.total < 4999) {
        return overTwoThousandFiveHundred[
          Math.floor(Math.random() * overTwoThousandFiveHundred.length + 1)
        ];
      }
      if (this.props.total > 5000 && this.props.total < 7499) {
        return overfiveThousand[
          Math.floor(Math.random() * overfiveThousand.length + 1)
        ];
      }
      if (this.props.total > 7500 && this.props.total < 9999) {
        return overSevenThousandFiveHundred[
          Math.floor(Math.random() * overSevenThousandFiveHundred.length + 1)
        ];
      }
      if (this.props.total > 10000) {
        return overTenThousand[
          Math.floor(Math.random() * overTenThousand.length + 1)
        ];
      }
      if (this.props.total < 499) {
        return belowFiveHundred[
          Math.floor(Math.random() * belowFiveHundred.length + 1)
        ];
      }
    };
    return (
      <div className="Result">
        <h1 className="result-title">RESULT</h1>
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

        <div className="feedback">
          <span className="ad">AD</span>
          <span className="advice">VICE</span>
        </div>
        <div className="comment">
          <p className="humor">{commentGenerator()}</p>
        </div>
      </div>
    );
  }
}

export default Result;
