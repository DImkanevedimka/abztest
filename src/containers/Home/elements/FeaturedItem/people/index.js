import React from 'react';
import './styles.css';

const People = ({ item }) => (
  <div className="people__item">
    <div className="people__name">{item.name}</div>
    <div className="people__info_box">
      <div className="people__img">
        <img src={item.img} alt="" />
      </div>
      <div className="people__info">
        <div className="people__text">{item.service}</div>
        <div className="people__text">{item.location}</div>
        <div>
          <a className="people__link" href="/">Add Friend</a>
        </div>
      </div>
    </div>
  </div>
);

export { People };
