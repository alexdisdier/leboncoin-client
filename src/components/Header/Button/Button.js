import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const button = ({ to, children, toggleMenu }) => {
  const [width, setWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    // clean up, unsubscribe by returning a function to remove EventListener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (width < 768)
    return (
      <div onClick={toggleMenu}>
        <Link to={to}>{children}</Link>
      </div>
    );

  return (
    <div>
     <Link className={`btn ${to}`} to={to}>
      {children}
     </Link>
    </div>
  );
};

export default button;
