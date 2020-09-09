import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav id="top-navbar" className="navbar navbar-expand-sm py-0 fixed-top">
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks"
          aria-label="Toggle navigation bar links">
          <span><i className="fas fa-caret-square-down"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navLinks">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/find" className="nav-link">Find Activity</a>
            </li>
            <li className="nav-item">
              <a href="/add" className="nav-link">Add Activity</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;