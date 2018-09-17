import React from 'react';
import { Link } from 'react-router-dom';
import iconFeed from './icons/Feed.svg';
import iconAsk from './icons/Ask.svg';
import iconCompanies from './icons/Companies.svg';
import iconServices from './icons/Services.svg';
import './styles.css';

const Menu = () => (
  <ul className="menu-list">
    <li className="menu__item">
      <div className="menu__icon">
        <img src={iconFeed} alt="" />
      </div>
      <Link to="/contact">Feed</Link>
    </li>
    <li className="menu__item">
      <div className="menu__icon">
        <img src={iconAsk} alt="" />
      </div>
      <Link to="/contact">Ask a Colleague</Link>
    </li>
    <li className="menu__item">
      <div className="menu__icon">
        <img src={iconCompanies} alt="" />
      </div>
      <Link to="/contact">Companies</Link>
    </li>
    <li className="menu__item">
      <div className="menu__icon">
        <img src={iconServices} alt="" />
      </div>
      <Link to="/contact">Service Directory</Link>
    </li>
  </ul>
);

export { Menu };
