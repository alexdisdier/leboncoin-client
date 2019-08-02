import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const button = props => {
  const [width, setWidth] = useState(window.innerWidth);
  const { to, children, toggleMenu } = props;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    // clean up, unsubscribe by returning a function to remove EventListener
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (width < 768) {
    return (
      <Link
        className={`btn ${to}`}
        to={to}
        onClick={() => {
          toggleMenu();
        }}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <Link className={`btn ${to}`} to={to}>
        {children}
      </Link>
    );
  }
};

export default button;
