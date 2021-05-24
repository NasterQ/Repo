import React from 'react'
import './App.css';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <h1><Link to="/" className="headerStyle">CSGO Teams</Link></h1>
  );
}

export default Header;
