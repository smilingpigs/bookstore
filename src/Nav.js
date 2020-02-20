import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
var FontAwesome = require('react-fontawesome');

function Nav() {
  return (
    <nav>
      <div className="NavBrand"><Link to="/login" className="navBrandLogo"><h3>book me</h3></Link></div>
      <div className="accessLinkDiv">
        <ul className="menuItemsList">
        <li> <Link to="/buy">BUY</Link></li>
        <li><Link to="/sell">SELL</Link></li>
          <FontAwesome
            className="fontAwesomeIconStyle"
            name="user"
            size="lg"
            // spin
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
