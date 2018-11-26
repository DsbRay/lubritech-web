import React, { Component } from 'react'
import Banner from '../components/pages/banner';
import styled from 'styled-components';
import { color, Divider } from '../utils/baseStyles'
import ImagesPage from '../components/pages/images';
import VideosPage from '../components/pages/videos';

const Headers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  padding-top: 30px;
  h2 {
    font-weight: 700;
    transition: color 0.25s ease;
    cursor: pointer;
    &:hover {
      color: ${color.green};
    }
  }
`;

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVideosVisible: false
    }
  }
  render() {
    return (
      <div>
        <Banner title="Gallery" />
        <Headers>
          <div>
            <h2 onClick={this.setImageGallery}>IMAGES</h2>
            {!this.state.isVideosVisible && <Divider />}
          </div>
          <div>
            <h2 onClick={this.setVideoGallery}>VIDEOS</h2>
            {this.state.isVideosVisible && <Divider />}
          </div>
        </Headers>
        {this.state.isVideosVisible ? (
          <VideosPage />
        ) : (
          <ImagesPage />
          )}
      </div>
    )
  }
  setImageGallery = () => {
    this.setState ({
      isVideosVisible: false
    })
  }

  setVideoGallery = () => {
    this.setState ({
      isVideosVisible: true
    })
  }
}

export default Gallery