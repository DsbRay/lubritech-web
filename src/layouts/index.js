import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// COMPONENTS
import Header from '../components/navbar'
import Footer from '../components/footer'
import ComingSoon from '../components/coming-soon'
// STYLES
import '../../node_modules/react-id-swiper/src/styles/css/swiper.css';
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <ComingSoon />
    {/* <Header />
    <div>
      {children()}
    </div>
    <Footer /> */}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
