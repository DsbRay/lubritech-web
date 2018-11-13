import React, { Component } from 'react'
import styled from 'styled-components';
import bannerbackground from '../../../static/images/home-slider/1.jpg';
import { color } from '../../utils/baseStyles';

const BannerContainer = styled.div`
  background-image: url(${bannerbackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100% 50%;
  padding: 20px;
`;

const CircleContainer = styled.div`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.64);
  border-radius: 100%;
  border: 5px solid ${color.blue};
  display: flex;
  align-items: center;
  margin: 0px auto;
  h2 {
    width: 100%;
    text-align: center;
    font-weight: 700;
  }
`;

class Banner extends Component {
  render() {
    const {title} = this.props
    return(
      <BannerContainer>
        <CircleContainer>
          <h2>{title}</h2>
        </CircleContainer>
      </BannerContainer>
    );
  }
}

export default Banner
