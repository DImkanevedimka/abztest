import React from 'react';
import icon from './img/search_icon.png';
import './styles.css';

const SearchBar = () => (
  <div className="searchbar">
    <div className="searchbar__icon">
      <img src={icon} alt="" />
    </div>
    <form action="">
      <input className="searchbar__input" type="text" placeholder="Company Name" />
    </form>
  </div>
);

export { SearchBar };
