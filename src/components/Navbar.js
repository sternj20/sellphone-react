import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="./">LOGO</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link">Placeholder1</a>
            </li>
            <li className="nav-item">
                <a className="nav-link">Placeholder2</a>
            </li>
            </ul>
        </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
