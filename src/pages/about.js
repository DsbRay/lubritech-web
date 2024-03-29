import React, { Component } from "react";
import { Divider, PageContent } from "../utils/baseStyles";
import styled from "styled-components";

import Banner from "../components/pages/banner";
import presentation from "../../static/pdf/presentation.pdf";
import profile from "../../static/pdf/Company-Profile.pdf";

import download from "../../static/images/download.png";

const OpenDownloads = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  div {
    margin: 0px 50px;
    p {
      font-size: 1rem;
      padding-bottom: 10px;
    }
    img {
      transition: opacity 0.25s ease;
      width: 30px;
    }
    &:hover {
      img {
        opacity: 0.5;
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
            <p>LUBRITECH is a Level 2 B-BBEE company.</p>
            <p>
              Our Team has years of experience in providing solutions to
              Industrial and Corporate companies.
            </p>
            <p>
              The experience, knowledge, accountability and pro-active nature of
              our Team is paramount to our growth and testament to the
              value-added service delivery to our clients.
            </p>
          </div>

          <div className="section">
            <h3 className="team">OUR TEAM</h3>
            <div className="grid">
              {[
                {
                  title: "Director",
                  name: "Ms Lungile Njara",
                  email: "lungile@lubritechm.com",
                },
                {
                  title: "",
                  name: "Mr Bevis Rodda",
                  email: "bevis@lubritechm.com",
                },
                {
                  title: "Sales",
                  name: "Mr Ferdi van den Berg",
                  email: "ferdi@lubritechm.com",
                },
                {
                  title: "Technical",
                  email: "info@lubritechm.com",
                },
                {
                  title: "Administration",
                  name: "",
                  email: "accounts@lubritechm.com",
                },
              ].map((i, index) => (
                <div key={index} className="members">
                  <p className="title">{i.title}</p>
                  <p>{i.name}</p>
                  <p>{i.email}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <OpenDownloads>
              <div>
                <a href={presentation} target="_blank">
                  <p>Presentation</p>
                  <img src={download} />
                </a>
              </div>
              <div>
                <a href={profile} target="_blank">
                  <p>Company Profile</p>
                  <img src={download} />
                </a>
              </div>
            </OpenDownloads>
          </div>

          <div className="section">
            <h2>CORE BUSINESS</h2>
            <Divider />
            <p>
              LUBRITECH specialises in the management and control of Hydrocarbon
              Contamination at the source. The added values of our products are
              decreased contamination in process circuits and increased mineral
              recovery.
            </p>
          </div>

          <div className="section">
            <h2>CORE VALUES</h2>
            <Divider />
            <p className="subtitle">Commitment and Service</p>
            <p>
              We are committed to service excellence and pride ourselves on
              providing and implementing innovative solutions to solve our
              customer’s problems.
            </p>
            <p className="subtitle">Innovation</p>
            <p>
              We constantly strive to implement the latest technology and work
              with industry professionals to develop new products that have the
              potential to set new industry standards.
            </p>
            <p className="subtitle">
              Health, Safety & Environmental Sustainability
            </p>
            <p>
              We develop all our products with an unmatched Safety and
              Environmental consciousness.
            </p>
            <p className="subtitle">Accountability</p>
            <p>
              Taking responsibility for the company’s policies and employees’
              actions and decisions.
            </p>
            <p className="subtitle">Respect</p>
            <p>
              Having mutual respect for our customers, suppliers, our employees
              and everyone we deal with.
            </p>
          </div>

          <div className="section">
            <h2>VISION STATEMENT</h2>
            <Divider />
            <p>
              LUBRITECH vision aims to be a market leader by providing and
              developing specialised, innovative, environmentally safe and cost
              effective products to the global industrial, mineral & mining
              sector.
            </p>
          </div>

          <div className="section">
            <h2>MISSION STATEMENT</h2>
            <Divider />
            <p>
              LUBRITECH mission is to provide solutions for the elimination of
              hydrocarbon contamination. To provide our customers with the most
              practicable and economical solutions using the latest technologies
              and products to optimise our clients processes. We aim to provide
              service excellence through dedication, integrity and ethical
              conduct.
            </p>
          </div>
        </PageContent>
      </div>
    );
  }
}

export default AboutPage;
