import React from 'react';
import './Navbar.css';

function Navbar(){
  return(
    <nav className='navbar'>
    <div className='navbar-brand'>My Shop</div>
    <div className='navbar-links'>
      <a href='#'>Home</a>
      <a href='#'>Category</a>
      <a href='#'>Settings</a>
      <a href='#'>Sepet</a>
    </div>
  </nav>
  );
}

export default Navbar;