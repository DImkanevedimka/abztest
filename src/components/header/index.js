import React from 'react';
import { SearchBar } from './searchbar';
import { UserBar } from './userbar';
import logo from '../../img/logo.svg';
import './styles.css';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header-inner">
        <div className="header__logo">
          <img src={logo} alt="logoimg" />
        </div>
        <div className="searchbar__container">
          <SearchBar />
        </div>
        <div className="userbar__container">
          <UserBar />
        </div>
      </div>
    </div>
  </header>
);
export { Header };
