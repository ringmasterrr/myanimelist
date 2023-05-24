import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Navbar() {
  return (
    <nav className='px-8 py-4 shadow'>
      <span className="logo">☮ My Anime List</span>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Anime +</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
