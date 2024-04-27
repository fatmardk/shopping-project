import React from 'react';
import { Link, BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './Navbar.css';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Cart from './pages/Cart';
function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <Link to='/Home'>My Shop</Link></div>
      <div className='navbar-links'>
        <Link to='/Home'>Home</Link>
        <Link to='/Category'>Category</Link>
        <Link to='/Settings'>Settings</Link>
        <Link to='/Cart'>Cart</Link>
      </div>

    </nav>
  );
}

export default Navbar;