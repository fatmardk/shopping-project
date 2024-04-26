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

function App() {

  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/Home' element={<Home />} /> {/* Home bileşenini tanımlıyoruz */}
          <Route path='/Settings' element={<Settings />}/>
          <Route path='/Sepet'/>
        </Routes>
      </Router>
  );
}

export default App;