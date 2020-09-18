import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
  state = {
    menuVisible: false
  }
  toggleMenu = () => {
    this.setState({
      menuVisible: !this.state.menuVisible
    })
  }
  render() {
    return (
      <nav id="top-navbar" className="navbar navbar-expand py-0 fixed-top">
        <Link to="/"><img src="favicon.ico" /></Link>
        <button className="open-button" onClick={this.toggleMenu}>Open</button>
        <ul className={'navbar-nav ml-auto ' + (this.state.menuVisible ? "show" : "hide")}>
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