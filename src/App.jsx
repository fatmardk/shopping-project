import React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slider from "react-slick";
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Navbar';
import Home from './pages/Home'; // Home bileşenini import ediyoruz
import Settings from './pages/Settings';
import Cart from './pages/Cart';

function App() {
  const [counts, setCounts] = useState({});


  return (
    <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home counts={counts} setCounts={setCounts} />} />
        <Route path='/Home' element={<Home counts={counts} setCounts={setCounts} />} />
          <Route path='/Settings' element={<Settings />}/>
          <Route path='/Cart' element={<Cart counts={counts}/>}/>
        </Routes>
      </Router>
  );
}

export default App;