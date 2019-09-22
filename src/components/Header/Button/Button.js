import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const button = ({ to, children, toggleMenu }) => {
  const [width, setWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    // clean up, unsubscribe by returning a function to remove EventListener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width < 768)
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

  return (
    <Link className={`btn ${to}`} to={to}>
      {children}
    </Link>
  );
};

export default button;
