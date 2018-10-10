import React from 'react';
import '../styles/Logo.css';

const Logo = () => {
  return (
    <div className="Logo">
      <div id="container">
        <div class="sign-four">
          VICE
          <br />
          <i class="fa fa-usd currency" aria-hidden="true" />
          <i class="fa fa-eur currency" aria-hidden="true" />
          <i class="fa fa-gbp currency" aria-hidden="true" />
          <i class="fa fa-jpy currency" aria-hidden="true" />
          <i class="fa fa-rub currency" aria-hidden="true" />
        </div>
      </div>
      <p className="tagline">BEAT YOUR VICE</p>
    </div>
  );
};

export default Logo;
