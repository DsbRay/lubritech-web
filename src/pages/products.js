import React, { Component } from 'react'
import styled from 'styled-components'
import { PageContent, Divider } from '../utils/baseStyles';
import Link from 'gatsby-link'

import Banner from '../components/pages/banner';

const ProductContainer = styled.div`
  a {
    transition: opacity 0.25s ease;
    &:hover {
      opacity: 0.5;
    }
  }
`

class ProductsPage extends Component {
  render() {
    return (
      <ProductContainer>
        <Banner title="Products" />
        <PageContent>
          <div className="section">
            <h2>HTech (Hydrocarbon Contamination Treatment)</h2>
            <Divider/>
            <p>HTech renders hydrocarbons inert to an environmentally friendly Organo-silicate. It is environmentally safer to use than detergent, degreasers and solvent based products</p>
            <Link to="/downloads" className="download">DOWNLOAD MORE</Link>
          </div>

          <div className="section">
            <h2>ETech (Equipment Cleaner)</h2>
            <Divider/>
            <p>ETech has been blended to work as an equipment/engine cleaner that is applied by using a high pressure system. It renders the hydrocarbons inert at source</p>
            <Link to="/downloads" className="download">DOWNLOAD MORE</Link>
          </div>

          <div className="section">
            <h2>MTech (Mechanical Parts &amp; General Degreaser)</h2>
            <Divider/>
            <p>MTech is water based and biodegradable and has been formulated and designed to clean Mechanical Parts and can be used as a general degreaser</p>
            <Link to="/downloads" className="download">DOWNLOAD MORE</Link>
          </div>

          <div className="section">
            <h2>DisFlo Range (Reagent)</h2>
            <Divider/>
            <p>DisFlo Reagent has been formulated and designed to improve the recovery & grade of most metallurgical commodities that use flotation as a concentration method</p>
            <Link to="/downloads" className="download">DOWNLOAD MORE</Link>
          </div>

        </PageContent>
      </ProductContainer>
    );
  }
}

export default ProductsPage
