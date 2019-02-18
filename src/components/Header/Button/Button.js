import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const button = props => (
  <Link className={`btn ${props.to}`} to={props.to}>
    {props.children}
  </Link>
);

export default button;
