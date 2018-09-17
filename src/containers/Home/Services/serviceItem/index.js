import React from 'react';
import './styles.css';

const ServiceItem = ({ data }) => (
  <li className="services__item">
    <div className="services__item_inner">
      <div className="services__img">
        <img src={data.icon} alt="" />
      </div>
      <span className="services__title">{data.title}</span>
    </div>
  </li>
);

export { ServiceItem };
