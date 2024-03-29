import React from 'react';

// source animation loading: https://codepen.io/alexdisdier/pen/XOBVdR
import image from '../../assets/img/loading.svg';
import './Loading.css';

const loading = () => (
  <div className="loader loader--style1" title="0">
    <img src={image} alt="loading gif" />
  </div>
);

export default loading;
