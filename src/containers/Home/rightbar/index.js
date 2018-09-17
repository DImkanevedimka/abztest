import React from 'react';
import { Advertise } from '../elements';
import { People, Product } from '../elements/FeaturedItem';
import img from '../../../img/poster2.jpg';
import './styles.css';

const RightBar = ({ people, products }) => {
  const FeaturedPeople = people.map(item => <People key={item.id} item={item} />);
  const FeaturedProducts = products.map(item => <Product key={item.id} item={item} />);
  return (
    <div className="right-sidebar">
      <div className="featured">
        <div className="featured-title">
          <div className="featured-title__name">People you may know</div>
          <a href="href" className="featured-title__link">
            See All
          </a>
        </div>
        <div className="people-items">
          {FeaturedPeople}
        </div>
      </div>
      <div className="featured featured-products">
        <div className="featured-title">
          <div className="featured-title__name">Featured Products</div>
          <a href="href" className="featured-title__link">
            See All
          </a>
        </div>
        <div className="product-items">
          {FeaturedProducts}
        </div>
      </div>
      <Advertise img={img} className="advertise--border" />
    </div>
  );
};

export { RightBar };
