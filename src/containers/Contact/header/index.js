import React from 'react';
import logo from '../../../img/logo.svg';
import { Button } from '../../../components/button';

const Header = () => (
  <header className="contact-header">
    <div>
      <div className="contact-header__top">
        <img className="contact__logo" src={logo} alt="logo img" />
        <Button text="Log In Now" />
      </div>
      <div className="contact__info">
        <div className="contact__title">Home of Dentistry</div>
        <div className="contact__text">
          Denteez was created by dentists for dentistry in order to make the life of everyone
          involved in dentistry easier.
        </div>
      </div>
    </div>
  </header>
);
export { Header };
