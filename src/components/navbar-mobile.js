import React, { Component } from 'react'
import { Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';



class MobileDropdown extends Component {
  render() {
    return (
      <Nav className="nav-list mobile">

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
    );
  }
}

export default MobileDropdown;