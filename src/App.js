import React from 'react';
import './App.css';
import Shop from './components/Shop';
import About from './components/About';
import Nav from './components/Nav';
import Home from './components/Home';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Route
          path="/"
          component={Home}
        />
        <Route
          path="/about" 
          component={About}
        />
        <Route
          path="/shop"
          component={Shop}
        />
      </div>    
    </Router>
  );
}

export default App;
