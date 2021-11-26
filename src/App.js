import React from 'react';
import './App.css';
import Shop from './components/Shop';
import About from './components/About';
import Nav from './components/Nav';
import {BrowserRouter as Router , Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <About></About>
      <Shop></Shop>
    </div>
  );
}

export default App;
