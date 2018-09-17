import React from 'react';
import './styles.css';

const Company = ({ item }) => (
  <div className="company__item">
    <div className="company__img">
      <img src={item.img} alt="" />
    </div>
    <div className="company__info">
      <div className="company__title">{item.title}</div>
      <div className="company__text">{item.service}</div>
      <div className="company__text">{item.location}</div>
      <div className="company__link">
        <a href="/">Follow Now</a>
      </div>
    </div>
  </div>
);

export { Company };
