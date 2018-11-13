import React, { Component } from 'react'
import { PageContent } from '../utils/baseStyles';

import Banner from '../components/pages/banner';

class WhyUsPage extends Component {
  render() {
    return(
      <div>
        <Banner title="Why Us"/>
        <PageContent>
          <div className="section">
            <h2>BECAUSE WE DO NOT JUST <i>SELL</i> YOU A PRODUCT...</h2>
          </div>

          <div className="section">
            <h3>DETERGENT PRODUCT RANGE</h3>
            <p>We specialise in Hydrocarbon Contamination Solutions. We manage and control contamination at the source.</p>
            <p>By conducting test work it can be proven that our products will not have a negative effect on your process circuit when used at workshops above &amp; underground.</p>
          </div>

          <div className="section">
            <h3>REAGENT PRODUCT RANGE</h3>
            <p>By conducting test work it is metallurgically proven that our reagents can improve Ultra Fines and overall Flotation Recovery & Grade. In collaboration with our clients we will provide a solution that will maximise their profitability.</p>
          </div>
        </PageContent>
      </div>
    );
  }
}

export default WhyUsPage
