import React, { Component } from 'react';
import Link from 'gatsby-link';
import Swiper from 'react-id-swiper';
import styled from 'styled-components';

import { Button, color } from '../utils/baseStyles';
// IMAGES
import image1 from '../../static/images/home-slider/1.jpg';
import image2 from '../../static/images/home-slider/2.jpg';
import image3 from '../../static/images/home-slider/3.jpg';

const Container = styled.div`
  position: relative;
  .swiper-container {
    .swiper-wrapper {
      height: calc(100vh - 70px);
    }
  }
`;

const SwiperBackground = styled.div`
  background-size: cover;
  &.background-1 {
    background-image: url(${image1});
  }
  &.background-2 {
    background-image: url(${image2});
  }
  &.background-3 {
    background-image: url(${image3});
  }
`;

const CircleImage = styled.div`
  background-color: rgba(255, 255, 255, 0.78);
  position:absolute;
  height: 500px;
  width: 500px;
  border-radius: 100%;
  text-align: center;
  left: 50%;
  top: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  border: 5px solid ${color.blue};
  h1 {
    span {
      color: ${color.blue};
      &.green {
        color: ${color.green};
      }
    }
  }
  p {
    font-size: 16px;
    padding-bottom: 20px;
  }
`;

class LandingPage extends Component {
  render() {
    const params = {
      effect: 'fade',
      autoplay: {
        delay: 5000
      }
    }
    return (
      <Container>
        <div>
        <Swiper {...params}>
          <SwiperBackground className="background-1" />
          <SwiperBackground className="background-2" />
          <SwiperBackground className="background-3" />
        </Swiper>
        </div>

        <CircleImage>
          <div>
            <h1>WELCOME TO</h1>
            <h1><span>LUBRI</span><span className="green">TECH</span></h1>
            <p className="bold">MANUFACTURING (Pty) Ltd</p>
            <p>Lubritech Manufacturing specialises in Hydrocarbon Contamination Control and Reagent Formulation for the Mining Industry.</p>
            <Link to="/about">
              <Button>LEARN MORE</Button>
            </Link>
          </div>
        </CircleImage>
      </Container>
    )
  }
}

export default LandingPage
