import React from 'react';
import './styles.css';

const Footer = () => (
  <footer className="contacts-container footer">
    <div className="footer__copyright">Denteez Copyright 2015</div>
    <div>
      <ul className="footer__list">
        <li>
          <a href="href" className="footer__link">Support</a>
        </li>
        <li>
          <a href="href" className="footer__link">Privacy Policy</a>
        </li>
        <li>
          <a href="href" className="footer__link">Terms of use</a>
        </li>
      </ul>
    </div>
  </footer>
);
export { Footer };
