import React, { Component } from 'react'
import styled from 'styled-components';
import { Divider } from '../../utils/baseStyles';

import image1 from '../../../static/images/gallery/images/before/1.jpg'
import image2 from '../../../static/images/gallery/images/apply/2.jpg'
import image3 from '../../../static/images/gallery/images/apply/3.jpg'
import image4 from '../../../static/images/gallery/images/apply/4.jpg'
import image5 from '../../../static/images/gallery/images/comparison/5.jpg'
import image6 from '../../../static/images/gallery/images/after/6.jpg'
import image7 from '../../../static/images/gallery/images/after/7.jpg'

const ImageContainer = styled.div`
  text-align: center;
  padding: 30px 15px;
  h4{
    padding-top: 30px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  padding-top: 30px;
  @media (min-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
  
  }
`;

class ImagesPage extends Component {
  render() {
    return (
      <div>
        <ImageContainer>
          <h4>Before the application of HTECH</h4>
          <Divider />
          <GridContainer>
            <div>
              <img src={image1} />
            </div>
          </GridContainer>
          <h4>Applying HTECH</h4>
          <Divider />
          <GridContainer>
            <div>
              <img src={image2} />
            </div> 
            <div>
              <img src={image3} />
            </div>
            <div>
              <img src={image4}/>
            </div>
          </GridContainer>
          <h4>Comparison of the same area, area on the left has been treated</h4>
          <Divider />
          <GridContainer>
            <div>
              <img src={image5} />
            </div>
          </GridContainer>
          <h4>After the application of HTECH</h4>
          <Divider />
          <GridContainer>
            <div>
              <img src={image6} />
            </div>
            <div>
              <img src={image7}/>
            </div>
          </GridContainer>
        </ImageContainer>
      </div>
    );
  }
}

export default ImagesPage
