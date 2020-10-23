import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo"><a href="http://localhost:3000/home">SportClub.<span>com</span></a></li>
          </ul>
          <ul>
              <li><a href="#aboutus">About us</a></li>
              <li><a href="#register">Register</a></li>
              <li><a href="#tikets">Contact</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
