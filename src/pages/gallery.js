import React, { Component } from 'react'
import Banner from '../components/pages/banner';

import ImagesPage from '../components/pages/images';
import VideosPage from '../components/pages/videos';

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVideosVisible: false
    }
  }
  render() {
    return(
      <div>
        <Banner title="Gallery" />
        <ImagesPage />
        <VideosPage />
      </div>
    )
  }
}

export default Gallery