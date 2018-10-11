import React, { Component } from 'react';
import '../styles/ItemResult.css';

class ItemResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="result-body">
        <div className="result-1">
          <p>
            {`It would take you ${Math.round(
              this.props.save / this.props.amount
            )} weeks to save for a ${this.props.item} if you stopped with the ${
              this.props.vice
            }. We all know you won't though, addict...`}
          </p>
        </div>
      </div>
    );
  }
}

export default ItemResult;
