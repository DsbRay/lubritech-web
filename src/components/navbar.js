import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
// UTILS
import { color } from '../utils/baseStyles'
// IMAGES
import lubritechLogo from '../../static/images/logo.png'


const NavbarContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    background-color: ${color.white};
    height: 70px;
    border-bottom: 3px solid ${color.green};
    padding: 0px 10px;
  }
`;

const Logo = styled.img`
  @media (min-width: 768px) {
    width: 210px;
    padding: 10px;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
`;

const NavLinks = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: end;
    ul {
      li {
        display: inline-block;
        padding: 15px;
        position: relative;
        .underline {
          width: 0px;
          height: 2px;
          background-color: ${color.green};
        }
        &:hover {
          cursor: pointer;
          p {
            color: ${color.blue};
            font-weight: bold;
          }
          .underline {
            width: 100%;
          }
        }
      }
      a:hover {
        color: ${color.blue};
        font-weight: bold;
      }
    }
  }
`;

const Dropdown = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  left:5px;
  top: -35px;
  text-align: center;
  border: 2px solid ${color.green};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 10px;
  transition: top 0.5s ease;
  &.active-dropdown {
    top: 63px;
  }
  ul {
    li {
      display: block;
      padding: 10px;
      border-bottom: 1px solid ${color.green};
      &.last{
        border: none;
      }
    }
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      galleryDropdown: false,
      aboutDropdown: false
    }
  }
  render() {
    return (
      <NavbarContainer>
        <Link to="/">
          <Logo src={lubritechLogo} />
        </Link>

        <NavLinks>
          <ul>
            <li onClick={this.onChangeAboutDropdown}>
              <p>About Us</p>
              <div className="underline"></div>
              <Dropdown className={this.state.aboutDropdown ? 'active-dropdown': ''}>
                <ul>
                  <li>link1</li>
                  <li className="last">link2</li>
                </ul>
              </Dropdown>
            </li>

            <Link to="/why-us" activeClassName="active-link">
              <li>
                Why Us
                <div className="underline"></div>
              </li>
            </Link>

            <Link to="/products">
              <li>
                Products
                <div className="underline"></div>
              </li>
            </Link>

            <li onClick={this.onChangeGalleryDropdown}>
              <p>Gallery</p>
              <div className="underline"></div>
              <Dropdown className={this.state.galleryDropdown ? 'active-dropdown': ''}>
                <ul>
                  <li>link3</li>
                  <li className="last">link4</li>
                </ul>
              </Dropdown>
            </li>

            <Link to="/downloads">
              <li>
                Downloads
              <div className="underline"></div>
              </li>
            </Link>

          </ul>
        </NavLinks>
      </NavbarContainer>
    );
  }
  onChangeAboutDropdown = () => {
    this.setState({ 
      aboutDropdown: !this.state.aboutDropdown,
      galleryDropdown: false
    })
  } 

  onChangeGalleryDropdown = () => {
    this.setState({ 
      galleryDropdown: !this.state.galleryDropdown,
      aboutDropdown: false
    })
  } 
}

export default Navbar
