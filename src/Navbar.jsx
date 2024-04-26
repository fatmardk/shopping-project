import React from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Navbar.css';
import Home from './pages/Home';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>My Shop</div>
      <div className='navbar-links'>
        <Link to='/Home'>Home</Link>
        <Link to='/Category'>Category</Link>
        <Link to='/Settings'>Settings</Link>
        <Link to='/Sepet'>Sepet</Link>
      </div>
      
    </nav>
  );
}

export default Navbar;