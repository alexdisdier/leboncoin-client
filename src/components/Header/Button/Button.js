import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const button = props => {
  if (props.windowWidth < 768) {
    return (
      <Link
        className={`btn ${props.to}`}
        to={props.to}
        onClick={() => {
          props.toggleMenu();
        }}
      >
        {props.children}
      </Link>
    );
  } else {
    return (
      <Link className={`btn ${props.to}`} to={props.to}>
        {props.children}
      </Link>
    );
  }
};

export default button;
