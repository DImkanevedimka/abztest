import React from 'react';

const Img = (props) => {
  const { url, index, click } = props;
  return (
    <div className="contacts__img" data-index={index}>
      <img src={url} alt="" />
      <span className="delete-img" onClick={click}>&#10006;</span>
    </div>
  );
};

export { Img };
