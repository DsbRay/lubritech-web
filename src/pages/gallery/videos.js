import React, { Component } from 'react'
import styled from 'styled-components';
import { color } from '../../utils/baseStyles';

import Banner from '../../components/pages/banner';

const VideoContainer = styled.div`

`;

const Grid = styled.div`
  
`;

class VideosPage extends Component {
  render() {
    return(
      <div>
        <Banner title="Videos"/>
        <VideoContainer>
          <Grid>

          </Grid>
        </VideoContainer>
      </div>
    );
  }
}

export default VideosPage
