import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav id="top-navbar" className="navbar navbar-expand py-0 fixed-top">
        <Link to="/"><img src="favicon.ico"></img></Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/find" className="nav-link">Find Activity</Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">Add Activity</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;