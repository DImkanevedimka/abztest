import React from 'react';
import './styles.css';

const Advertise = ({ img, className = '' }) => (
  <div className="advertise">
    <div className="advertise__title">Advertisement</div>
    <div className={`advertise__img ${className}`}>
      <img src={img} alt="" />
    </div>
    <div className="advertise__by">Ads by Denteez.com</div>
  </div>
);

export { Advertise };
