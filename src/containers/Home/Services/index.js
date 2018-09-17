import React, { Component } from 'react';
import { ServiceItem } from './serviceItem';

class Services extends Component {
  myRef = React.createRef();

  state = {
    count: null,
  };

  componentDidMount() {
    /* global window */
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  resize = () => {
    const elem = this.myRef.current;
    const width = elem.clientWidth - 27;
    const count = Math.floor(width / 140);
    this.setState({
      count,
    });
  };

  render() {
    const { services } = this.props;
    const { count } = this.state;
    const servicesItems = services.map(item => <ServiceItem key={item.id} data={item} />);
    const empty = <li>Empty</li>;
    return (
      <ul className={`services col-${count}`} ref={this.myRef}>
        {(!services.length && empty) || servicesItems}
      </ul>
    );
  }
}

export { Services };
