import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
// COMPONENTS
import MobileDropdown from '../components/navbar-mobile'
// UTILS
import { color } from '../utils/baseStyles'
// IMAGES
import lubritechLogo from '../../static/images/logo.png'


const NavbarContainer = styled.div`
  height: 60px;
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
  width: 150px;
  margin: 10px;
  @media (min-width: 768px) {
    width: 210px;
    padding: 10px;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
    margin: 0px;
  }
`;

const NavLinks = styled.div`
  display: none;
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
  font-size: 14px;
  width: 100%;
  left:-15px;
  text-align: center;
  border: 2px solid ${color.green};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 10px;
  transform: translateY(-135px);
  &.about {
    width: 150px;
  }
  &.gallery {
    left: 5px;
  }
  &.active-dropdown {
    transform: translateY(20px);
    z-index: 0;
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

const ButtonDropdown = styled.div`
  display: block;
  position: absolute;
  right: 10px;
  top: 10px;
  div {
    width: 30px;
    height: 5px;
    background-color: ${color.blue};
    margin: 5px 0;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      galleryDropdown: false,
      aboutDropdown: false,
      mobileMenuVisible: false
    }
  }
  render() {
    return (
      <NavbarContainer>
        <Link to="/">
          <Logo src={lubritechLogo} />
        </Link>
        <ButtonDropdown onClick={this.toggleDropdownMenu}>
          <div></div>
          <div></div>
          <div></div>
        </ButtonDropdown>

        {this.state.mobileMenuVisible &&
          <MobileDropdown />
        }

        <NavLinks>
          <ul>
            <li onClick={this.onChangeAboutDropdown}>
              <p>About Us</p>
              <div className="underline"></div>
              <Dropdown className={this.state.aboutDropdown ? 'active-dropdown about' : 'about'}>
                <ul>
                  <Link to="/about">
                    <li>
                      About
                    </li>
                  </Link>
                  <Link to="/about">
                    <li>
                    Company Profile
                    </li>
                  </Link>
                  <Link to="/gallery/videos">
                    <li className="last">
                    Presentation
                  </li>
                  </Link>
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
              <Dropdown className={this.state.galleryDropdown ? 'active-dropdown gallery' : 'gallery'}>
                <ul>
                  <li>
                    <Link to="/gallery">Images</Link>
                  </li>
                  <li className="last">
                    <Link to="/gallery/videos">Videos</Link>
                  </li>
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

  toggleDropdownMenu = () => {
    this.setState({
      mobileMenuVisible: !this.state.mobileMenuVisible
    })
  }
}

export default Navbar
