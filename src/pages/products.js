import React, { Component } from 'react'
import styled from 'styled-components';
import { color } from '../utils/baseStyles';

import Banner from '../components/pages/banner';

class ProductsPage extends Component {
  render() {
    return(
      <div>
        <Banner title="Products"/>
      </div>
    );
  }
}

export default ProductsPage
