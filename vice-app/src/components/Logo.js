import React from 'react';
import '../styles/Logo.css';

const Logo = () => {
  return (
    <div className="Logo">
      <div id="container">
        <div className="sign-four">
          VICE
          <br />
          <i className="fa fa-usd currency" aria-hidden="true" />
          <i className="fa fa-eur currency" aria-hidden="true" />
          <i className="fa fa-gbp currency" aria-hidden="true" />
          <i className="fa fa-jpy currency" aria-hidden="true" />
          <i className="fa fa-rub currency" aria-hidden="true" />
        </div>
      </div>
      <p className="tagline">BEAT YOUR VICE</p>
    </div>
  );
};

export default Logo;
