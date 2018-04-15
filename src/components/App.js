import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Home></Home>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
