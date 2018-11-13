import React, { Component } from 'react'
import styled from 'styled-components';
import { color, Divider } from '../utils/baseStyles';

import Banner from '../components/pages/banner';

const PageContent = styled.div`
  text-align: center;
  padding: 50px 30px;
  p {
    padding-bottom: 10px;
  }
  .section {
    padding-bottom: 50px;
    h3 {
      padding-bottom: 30px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      .members {
        padding-bottom: 30px;
        p {
          padding: 0px;
          font-size: 16px;
          &.title {
            font-weight: 700;
          }
        }
      }
    }
  }
`;

class AboutPage extends Component {
  render() {
    return (
      <div>
        <Banner title="About Us" />
        <PageContent>
          <div className="section">
            <h2>MANAGEMENT TEAM &amp; EXPERIENCE</h2>
            <Divider />
            <p>LUBRITECH MANUFACTURING is a Level 2 B-BBEE company.</p>
            <p>Our Team has years of experience in providing solutions to Industrial and Corporate companies.</p>
            <p>We work with a team of skilled engineers across all disciplines that collectively have decades of experience in the design and implementation of mineral processing plants. Our understanding of global standards and logistics, complement our ability to successfully and competitively deliver products internationally.</p>
            <p>The experience, knowledge, accountability and pro-active nature of our Team is paramount to our growth and testament to the value-added service delivery to our clients.</p>
          </div>

          <div className="section">
            <h2>OUR TEAM</h2>
            <Divider />
            <div className="grid">
              {
                [
                  {
                    "title": 'Director',
                    "name": 'Ms Lungile Njara',
                    "email": 'lungile@lubritechm.co.za'
                  },
                  {
                    "title": 'Managing Director',
                    "name": 'Mr Bevis Rodda',
                    "email": 'bevis@lubritechm.co.za'
                  },
                  {
                    "title": 'Sales',
                    "name": 'Mr Ferdi van den Berg',
                    "email": 'ferdi@lubritechm.co.za'
                  },
                  {
                    "title": 'Technical',
                    "email": 'info@lubritechm.co.za'
                  },
                  {
                    "title": 'Administration',
                    "name": 'Ms Lucinda Jones',
                    "email": 'accounts@lubritechm.co.za'
                  }
                ].map((i, index) =>
                  <div key={index} className="members">
                    <p className="title">{i.title}</p>
                    <p>{i.name}</p>
                    <p>{i.email}</p>
                  </div>
                )
              }
            </div>
          </div>

          <div className="section">
              <h2>CORE BUSINESS</h2>
              <Divider />
              <p>LUBRITECH MANUFACTURING specialises in the management and control of Hydrocarbon Contamination at the source. The added values of our products are decreased contamination in process circuits and increased mineral recovery.</p>
          </div>

          <div className="section">
              <h2>CORE VALUES</h2>
              <Divider />
              <p className="subtitle">Commitment and Service</p>
              <p>We are committed to service excellence and pride ourselves on providing and implementing innovative solutions to solve our customer’s problems.</p>
              <p className="subtitle">Innovation</p>
              <p>We constantly strive to implement the latest technology and work with industry professionals to develop new products that have the potential to set new industry standards.</p>
              <p className="subtitle">Health, Safety & Environmental Sustainability</p>
              <p>We develop all our products with an unmatched Safety and Environmental consciousness.</p>
              <p className="subtitle">Accountability</p>
              <p>Taking responsibility for the company’s policies and employees’ actions and decisions.</p>
              <p className="subtitle">Respect</p>
              <p>Having mutual respect for our customers, suppliers, our employees and everyone we deal with.</p>
          </div>

          <div className="section">
              <h2>VISION STATEMENT</h2>
              <Divider />
              <p>LUBRITECH MANUFACTURING's vision aims to be a market leader by providing and developing specialised, innovative, environmentally safe and cost effective products to the global industrial, mineral & mining sector.</p>
          </div>

          <div className="section">
              <h2>MISSION STATEMENT</h2>
              <Divider />
              <p>LUBRITECH MANUFACTURING’s mission is to provide global solutions for the elimination of hydrocarbon contamination. To provide our customers with the most practicable and economical solutions using the latest technologies and products to optimise our clients processes. We aim to provide service excellence through dedication, integrity and ethical conduct.</p>
          </div>
        </PageContent>
      </div>
    );
  }
}



export default AboutPage
