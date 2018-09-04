import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
// IMAGES
import lubritechLogo from '../../static/images/logo.png'


const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
`;

const Logo = styled.img`
  width: 240px;
  padding: 10px;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  ul {
    li {
      display: inline-block;
    }
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <Logo src={lubritechLogo} />

    <NavLinks>
      <ul>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/why-us">Why Us</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/downloads">Downloads</Link>
        </li>
      </ul>
    </NavLinks>
  </NavbarContainer>
)

export default Navbar
