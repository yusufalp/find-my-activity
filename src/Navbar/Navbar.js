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
      <nav id="top-navbar" className="navigation-bar">
        <Link to="/" className="brand-logo"><img src="favicon.ico" alt="Brand logo"/></Link>
        <p
          className="menu-toggler"
          onClick={this.toggleMenu}
        >
          <i className="fas fa-bars"></i>
        </p>

        <div className={"navbar-content " + (this.state.menuVisible ? "open-menu" : "")}>
          <ul className="navbar-nav">
            <li className="navbar-link">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-link">
              <Link to="/find" >Find Activity</Link>
            </li>
            <li className="navbar-link">
              <Link to="/add">Add Activity</Link>
            </li>
            <li className="navbar-link">
              <Link to="/about" >About</Link>
            </li>
            <li className="navbar-link">
              <Link to="/contact" >Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;