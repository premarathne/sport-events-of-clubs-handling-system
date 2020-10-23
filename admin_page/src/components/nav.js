import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">SportClub<span>.com</span></li>
          </ul>
          <ul>
              <li><a href="/user">Users</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
