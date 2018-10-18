import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import Button from '@material-ui/core/Button';

class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let fbContent;

    if (this.props.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: '100px',
            margin: 'auto'
          }}
        >
          <img src={this.props.picture} alt={this.props.name} />
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.handleLogout}
            type="submit"
          >
            Logout
          </Button>
        </div>
      );
    } else {
      return (
        <FacebookLogin
          appId="708366052855998"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.props.responseFacebook}
        />
      );
    }

    return <div className="Facebook">{fbContent}</div>;
  }
}

export default Facebook;
