import React, { Component } from 'react';
import './styles.css';

class Popup extends Component {
  state = {
    isOpened: true,
  };

  close = () => {
    this.setState({ isOpened: false });
  };

  render() {
    const { isOpened } = this.state;
    const { errorNumber, errorText } = this.props;
    return (
      <div className={`popup ${isOpened ? '' : 'closed'}`}>
        <span>
          Sorry Error:
          {errorNumber}
        </span>
        <span>{errorText}</span>
        <span className="popup-close" onClick={this.close}>&#10006;</span>
      </div>
    );
  }
}

export { Popup };
