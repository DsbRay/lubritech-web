import React, { Component } from "react";
import Link from 'gatsby-link';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { color } from '../utils/baseStyles';
import styled from 'styled-components';
import logo from '../../static/images/logo.png';
import MobileDropdown from './navbar-mobile';

const NavbarContainer = styled.div`
.navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:focus, .navbar-default .navbar-nav>.open>a:hover {
  background-color: white!important;
}
.main-nav {
  background-color: ${color.white};
  margin-bottom: 0px;
  min-height: 65px;
    .nav-header {
      .nav-brand {
        img {
          width: 140px;
        }
      }
    }
    .nav-list {
      &.desktop {
        display: none;
      }
      .nav-item {
        a {
          text-align: center;
          &:hover {
          }
        }
        .nav-dropdown {
        }
      }
    }
    .caret {
      display: none;
    }
  }
  @media (min-width: 768px) {
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
      &.desktop {
        display: block;
      }
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
    .mobile {
      display: none;
    }
  }
}
`;

const DropdownButton = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
  div {
    height: 3px;
    margin: 5px 0px;
    background-color: ${color.blue};
    width: 100%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDropdownVisible: false
    }
  }
  render() {
    return (
      <NavbarContainer>
        <Navbar className="main-nav">

          <Navbar.Header className="nav-header">
            <Navbar.Brand className="nav-brand">
              <Link to="/">
                <img src={logo} />
              </Link>
            </Navbar.Brand>
          </Navbar.Header>

          <DropdownButton onClick={this.toggleDropdown}>
            <div></div>
            <div></div>
            <div></div>
          </DropdownButton>

          {this.state.isDropdownVisible &&
            <MobileDropdown />
          }
          <Nav className="nav-list desktop">
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

  toggleDropdown = () => {
    this.setState({
      isDropdownVisible: !this.state.isDropdownVisible
    });
  }

}

export default Header;