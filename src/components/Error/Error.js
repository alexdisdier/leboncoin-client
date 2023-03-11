import React from 'react';

import image from '../../assets/img/Cloud_Warning.svg';
import './Error.css';

const error = (props) => {
  // eslint-disable-next-line no-shadow
  const { error } = props;

  return (
    <div id="error-loading" className="absolute">
      <div className="relative">
        <img src={image} alt="cloud warning error" />
        <span>{error}</span>
      </div>
    </div>
  );
};

export default error;
