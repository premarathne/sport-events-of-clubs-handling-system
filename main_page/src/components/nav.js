import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo"><a href="/aboutus">Design<span>Labs</span></a></li>
          </ul>
          <ul>
              <li><a href="/events">Events</a></li>
              <li><a href="/contactus">ContactUs</a></li>
              <li><a href="http://localhost:3000/main/login" target="_blank">login</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
