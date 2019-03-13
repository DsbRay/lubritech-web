import React, { Component } from "react";
import styled from 'styled-components';
import logo from '../../static/images/logo.png';
import Link from 'gatsby-link';

import {color} from '../utils/baseStyles';


const NavbarContainer = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  z-index: 999;
  @media (min-width: 1024px) {
    flex-wrap: wrap;
  }
`;
const NavbarBrand = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(50%);
  padding: 0 1.5rem;
  img {
    width: 200px;
    height: auto;
    margin: 0px;
  }
  @media (min-width: 1024px) {
    width: auto;
    flex-grow: 1;
  }
`;
const NavbarButton = styled.div`
  position: relative;
  width: calc(50%);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1rem 1.5rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25px;
    height: 15px;
    span {
      height: 2px;
      background-color: #000;
    }
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
const NavbarMenu = styled.div`
  width: 100%;
  ul {
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    transition: height 350ms ease;
    height: 0;
    justify-content: space-around;
    box-shadow: inset rgba($color: #000, $alpha: 1) 0px 0px 15px -5px;
    a {
      &.active {
          span {
             opacity: 1;
          }
      }
   }
    li {
      margin: 0px;
      list-style: none;
      padding: 1rem 2rem;
      color: ${color.blue};
      position: relative;
      text-align: center;
      a {
        text-decoration: none;
        font-size: 1rem;
        color: inherit;
        font-weight: 400;
      }
      span {
        position: absolute;
        height: 2px;
        width: calc(100% - 4rem);
        background-color: ${color.green};
        bottom: 1rem;
        left: 2rem;
        opacity: 0;
        transition: opacity 250ms ease;
      }
    }
    &.open {
      height: 235px;
    }
  }
  @media (min-width: 1024px) {
    flex-grow: 2;
    width: auto;
    ul {
      flex-direction: row;
      justify-content: flex-end;
      height: auto !important;
      box-shadow: inset rgba($color: #000, $alpha: 0) 0px 0px 15px -5px;
      li {
        padding: 1.5rem 2rem;
      &:hover {
        cursor: pointer;
        span {
          opacity: 1;
        }
      }
      }
    }
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navShow: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ navShow: !this.state.navShow });
  }

  render() {
    return (
      <NavbarContainer>
        <NavbarBrand>
          <Link to="/">
            <img src={logo} alt="One PLus One Accounting"/>
          </Link>
        </NavbarBrand>
        <NavbarButton>
          <div onClick={this.toggleMenu}>
            <span />
            <span />
            <span />
          </div>
        </NavbarButton>
        <NavbarMenu>
          <ul className={`${this.state.navShow ? "open" : ""}`}>
             <Link to="/">
                <li>
                   Home
                   <span></span>
                </li>
            </Link>
            <Link to="/about">
               <li>
                  About Us
                  <span></span>
               </li>
            </Link>
            <Link to="/why-us">
               <li>
                  Why Us ?
                  <span></span>
               </li>
            </Link>
            <Link to="/products">
               <li>
                  Products
                  <span></span>
               </li>
            </Link>
            <Link to="/gallery">
               <li>
                  Gallery
                  <span></span>
               </li>
            </Link>
            <Link to="/downloads">
               <li>
                  Downloads
                  <span></span>
               </li>
            </Link>
          </ul>
        </NavbarMenu>
      </NavbarContainer>
    );
  }
}

export default Header;