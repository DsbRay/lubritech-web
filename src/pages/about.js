import React, { Component } from 'react'
import styled from 'styled-components';
import { color } from '../utils/baseStyles';

import Banner from '../components/pages/banner';

class AboutPage extends Component {
  render() {
    return(
      <div>
        <Banner title="About Us"/>
      </div>
    );
  }
}

export default AboutPage
