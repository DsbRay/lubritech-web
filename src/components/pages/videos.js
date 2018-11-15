import React, { Component } from 'react'
import styled from 'styled-components';

import video1 from '../../../static/images/gallery/videos/1.mp4';
import video2 from '../../../static/images/gallery/videos/2.mp4';
import video3 from '../../../static/images/gallery/videos/3.mp4';
import video4 from '../../../static/images/gallery/videos/4.mp4';
import video5 from '../../../static/images/gallery/videos/5.mp4';
import video7 from '../../../static/images/gallery/videos/7.mp4';
import video9 from '../../../static/images/gallery/videos/9.mp4';

const VideoContainer = styled.div`
  padding: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  video {
    width: 100%;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

class VideosPage extends Component {
  render() {
    return (
      <div>
        <VideoContainer>
          <Grid>
            <video controls>
              <source src={video1} type="video/mp4" />
            </video>
            <video controls>
              <source src={video2} type="video/mp4" />
            </video>
            <video controls>
              <source src={video3} type="video/mp4" />
            </video>
            <video controls>
              <source src={video4} type="video/mp4" />
            </video>
            <video controls>
              <source src={video5} type="video/mp4" />
            </video>
            <video controls>
              <source src={video7} type="video/mp4" />
            </video>
            <video controls>
              <source src={video9} type="video/mp4" />
            </video>
          </Grid>
        </VideoContainer>
      </div>
    );
  }
}

export default VideosPage
