import React, {useEffect, useState} from 'react'
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path ="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
