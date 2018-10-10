import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
        <ExpansionPanel style={styles.background}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h4 style={styles.background}>Result</h4>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <p style={styles.background}>
              {this.props.amount} - Weekly
              <br />
              {this.props.amount * 4} - Monthly
              <br />
              {this.props.amount * 52} - Yearly
            </p>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default Result;
