import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
// UTILS
import { color } from '../utils/baseStyles'

const DropdownLinks = styled.div`
  position: relative;
  ul {
    text-align: center;
    background-color: ${color.blue};
    a {
      font-weight: 700;
      li {
        border-bottom: 1px solid black;
        padding: 5px 0px;
      }
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

class MobileDropdown extends Component {
  render() {
    return(
      <DropdownLinks>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/">
            <li>Company Profile</li>
          </Link>
          <Link to="/">
            <li>Presentation</li>
          </Link>
          <Link to="/why-us">
            <li>Why us?</li>
          </Link>
          <Link to="/products">
            <li>Products</li>
          </Link>
          <Link to="/gallery">
            <li>Images</li>
          </Link>
          <Link to="/gallery/videos">
            <li>Videos</li>
          </Link>
          <Link to="/downloads">
            <li>Downloads</li>
          </Link>
        </ul>
      </DropdownLinks>
    );
  }
}

export default MobileDropdown;