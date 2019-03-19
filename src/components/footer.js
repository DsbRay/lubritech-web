import React from 'react'
import styled from 'styled-components';
import Link from 'gatsby-link';

import { color } from '../utils/baseStyles';
import logo from '../../static/images/logo.png';


const FooterContainer = styled.div`
  padding: 30px 100px;
  text-align: center;
  background-color: ${color.white};
  border-top: 5px solid ${color.green};
  h3 {
    font-size: 16px;
    font-weight: 900;
  }
  a {
    transition: color 0.25s ease;
    &:hover {
      color: ${color.green};
    }
  }
  p, a {
    font-size: 12px;
    display: block;
  }
  .contact-block {
    margin: 10px auto;
    img {
      display: block;
      margin: 0px auto;
      width: 35%;
      min-width: 150px;
    }
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 30px 50px;
    text-align: left;
    h3 {
      font-size: 18px;
    }
    p, a {
      font-size: 14px;
    }
  }
  @media (min-width: 1200px) {
    padding: 30px 100px;
    h3 {
      font-size: 20px;
    }
    p, a {
      font-size: 16px;
  }
  }
`;

const Divider = styled.div`
  display: block;
  margin: 5px auto;
  height: 2px;
  width: 40%;
  background-color: ${color.green};
  @media (min-width: 768px) {
    margin: 3px 0px;
  }
`;

const Footer = () => (
  <FooterContainer>
    <div className="contact-block">
      <h3>Contact Us</h3>
      <Divider />
      <p>Email:</p>
      <a href="mailto:info@lubritechm.com?Subject=Hello">info@lubritechm.com</a>
      <p>Call:</p>
      <a href="tel:+27861000487">+27 861 000 487</a>
    </div>
    <div className="contact-block">
      <img src={logo} />
    </div>
    <div className="contact-block">
      <Link to="/about">About Us</Link>
      <Link to="/why-us">Why Us?</Link>
      <Link to="/products">Products</Link>
      <Link to="/gallery">Images</Link>
      <Link to="/gallery">Videos</Link>
      <Link to="/downloads">Downloads</Link>
    </div>
  </FooterContainer>
)

export default Footer
