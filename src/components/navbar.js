import React, { Component } from "react";
import Link from 'gatsby-link';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { color } from '../utils/baseStyles';
import styled from 'styled-components';
import logo from '../../static/images/logo.png';
const NavbarContainer = styled.div`
.navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:focus, .navbar-default .navbar-nav>.open>a:hover {
  background-color: white!important;
}
  @media (min-width: 1200px) {
  .main-nav {
    margin-bottom: 0px;
    background-color: ${color.white};
    .nav-header {
      .nav-brand {
        height: auto;
        display: flex;
        align-items: center;
        img {
          width: 180px;
        }
      }
    }
    .nav-list {
      float: right;
      .nav-item {
        a {
          padding: 25px 15px;
          color: ${color.black};
          text-decoration: none;
          font-weight: 700;
          &:hover {
            color: ${color.green};
          }
        }
        .nav-dropdown {

        }
      }
    }
    .caret {
      color: ${color.blue};
    }
  }
}
`;

class Header extends Component {
  render() {
    return (
      <NavbarContainer>
        <Navbar className="main-nav">

          <Navbar.Header className="nav-header">
            <Navbar.Brand className="nav-brand">
              <Link to="/">
                <img src={logo}/>
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav className="nav-list">

            <NavDropdown title="About Us" id="basic-nav-dropdown" className="nav-item">
              <MenuItem className="dropdown-item" href="/about">About Us</MenuItem>
              <MenuItem className="dropdown-item">Company Profile</MenuItem>
              <MenuItem className="dropdown-item">Presentation</MenuItem>
            </NavDropdown>

            <NavItem href="/why-us" className="nav-item">
                Why Us?
            </NavItem>

            <NavItem href="/products" className="nav-item">
                Products
            </NavItem>

             <NavDropdown title="Gallery" id="basic-nav-dropdown" className="nav-item">
              <MenuItem className="dropdown-item" href="/gallery">Images</MenuItem>
              <MenuItem className="dropdown-item" href="/gallery/videos">Videos</MenuItem>
            </NavDropdown>

             <NavItem href="/downloads" className="nav-item">
                Downloads
            </NavItem>

          </Nav>
        </Navbar>
      </NavbarContainer>
    );
  }
}

export default Header;