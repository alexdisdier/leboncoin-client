import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const button = props => (
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

export default button;
