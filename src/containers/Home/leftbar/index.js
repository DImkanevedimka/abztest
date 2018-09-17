import React from 'react';
import { Advertise, Menu } from '../elements';
import { Company } from '../elements/FeaturedItem';
import img from '../../../img/poster1.jpg';
import './styles.css';

const LeftBar = ({ companies }) => {
  const FeaturedCompanies = companies.map(item => <Company key={item.id} item={item} />);
  return (
    <div className="left-sidebar">
      <Menu />
      <Advertise img={img} />
      <div className="featured featured--divinder_top">
        <div className="featured-title">
          <div className="featured-title__name">Featured Companies</div>
          <a href="href" className="featured-title__link">
            See All
          </a>
        </div>
        <div className="company-items">{FeaturedCompanies}</div>
      </div>
      <div className="left-sidebar__footer">
        <div className="footer__copyright">Denteez Copyright 2015</div>
        <div>
          <ul className="footer__list">
            <li>
              <a href="href" className="footer__link">
              Terms of use
              </a>
            </li>
            <li>
              <a href="href" className="footer__link">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { LeftBar };
