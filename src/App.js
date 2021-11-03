import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/index';
import Navbar from './Components/Navbar/index';
import Footer from './Components/Footer/FooterBars/FooterBars';
import WebDevelopment from './Pages/WebDev';
import Marketing from './Pages/Marketing';

function App() {
  return (
    <div className="App">
      <Router basename='/'>
      <Navbar/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/webdev" component={WebDevelopment} />
        <Route exact path="/marketing" component={Marketing} />
        </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
