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
      <nav id="top-navbar" className="navbar navbar-expand-sm">
        <Link to="/"><img src="favicon.ico" alt="Brand logo" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
        </div>
      </nav>
    )
  }
}

export default Navbar;