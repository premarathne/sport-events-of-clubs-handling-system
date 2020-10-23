import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link ,NavLink  } from 'react-router-dom';
import logo from '../../assets/img/brand/logo_one.png'
import sygnet from '../../assets/img/brand/sygnet.svg'
import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import { Badge } from 'reactstrap';

import './CustomNavbar.css'



export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Navbar.Collapse>
          <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/main/home" className="nav-link" >Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/main/about" className="nav-link">Users</Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/main/news" className="nav-link">Settings</NavLink>
          </NavItem>
        </Nav>
        </Navbar.Collapse>
        <Nav className="ml-auto" navbar>
          <NavItem className="px-3">
            <Link to="/main/login" className="nav-link">Login</Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/main/register" className="nav-link">Register</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}
