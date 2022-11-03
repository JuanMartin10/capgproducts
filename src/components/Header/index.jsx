import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">NaptProducts</Link>
        <nav>
          <p>Breadcrumb</p>
        </nav>
      </div>
      <div className="shoppingBag">
        <img
          src="https://www.svgrepo.com/show/43071/shopping-bag.svg"
          width="20px"
          alt="shopping-bag-icon"
        />
      </div>
    </header>
  );
};

export default Header;
