import React, { Component } from "react";
import Link from 'gatsby-link';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../../static/images/logo.png';
const NavbarContainer = styled.div`
  @media (min-width: 1200px) {
  .main-nav {
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
        }
        .nav-dropdown {

        }
      }
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
              <MenuItem className="dropdown-item">About Us</MenuItem>
              <MenuItem className="dropdown-item">Company Profile</MenuItem>
              <MenuItem className="dropdown-item">Presentation</MenuItem>
            </NavDropdown>

            <NavItem className="nav-item">
              <Link to="/">
                Why Us?
              </Link>
            </NavItem>

            <NavItem className="nav-item">
              <Link to="/">
                Products
              </Link>
            </NavItem>

             <NavDropdown title="Gallery" id="basic-nav-dropdown" className="nav-item">
              <MenuItem className="dropdown-item">Images</MenuItem>
              <MenuItem className="dropdown-item">Videos</MenuItem>
            </NavDropdown>

             <NavItem className="nav-item">
              <Link to="/">
                Downloads
              </Link>
            </NavItem>

          </Nav>
        </Navbar>
      </NavbarContainer>
    );
  }
}

export default Header;