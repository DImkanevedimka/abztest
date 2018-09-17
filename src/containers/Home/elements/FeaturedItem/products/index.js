import React from 'react';
import './styles.css';

const Product = ({ item }) => (
  <div className="product__item">
    <div className="product__name">{item.name}</div>
    <div className="product__info_box">
      <div className="product__img">
        <img src={item.img} alt="" />
      </div>
      <div className="product__text">{item.text}</div>
    </div>
  </div>
);

export { Product };
