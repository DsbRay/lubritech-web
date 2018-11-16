import React, { Component } from 'react'
import styled from 'styled-components';
import { color, Button, Divider } from '../utils/baseStyles';

import Banner from '../components/pages/banner';

import htechDataSheet from '../../static/pdf/htech-product-data-sheet.pdf';
import mtechDegreaserPDS from '../../static/pdf/mtech-degreaser-pds.pdf';
import biodegradabilityCertificate from '../../static/pdf/biodegradability-certificate.pdf';
import chromeGradeVsDosage from '../../static/pdf/chrome-grade-vs-dosage.pdf';
import disfloPtTest from '../../static/pdf/disflo-pt-test.pdf';
import htechFeasabilityReport from '../../static/pdf/htech-feasability-report.pdf';
import htechHydrocarbonEliminator from '../../static/pdf/htech-hydrocarbon-eliminator-web.pdf';
import lubritechBee from '../../static/pdf/lubritech-manufacturing-bee.pdf';
import stdTest from '../../static/pdf/std-test.pdf';

import download from '../../static/images/download.png';

const FormContainer = styled.div`
  text-align:center;
  form {
    .item {
      label, input, textarea {
        display: block;
        margin: 0px auto;
      }
      input, textarea {
        padding: 5px 10px;
        border: 2px solid ${color.green};
        border-radius: 20px;
        outline: none;
        width: 40%;
      }
      label {
        padding-top: 30px;
        font-weight: 700;
      }
      textarea {
        min-height: 20vh;
      }
    }
    button {
      margin-top: 30px;
    }
  }
`;

const DownloadsContainer = styled.div`
   padding: 30px;
   text-align: center;
   .download-link {
     padding-top: 20px;
   }
   a {
     transition: opacity 0.25s ease;
     img {
       padding-top: 10px;
       max-width: 30px;
     }
     &:hover {
       opacity: 0.5;
     }
   }
`;

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class DownloadsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      formSuccess: false
    };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        this.setState({
          formSuccess: true
        })
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div>
        <Banner title="Downloads" />
        {!this.state.formSuccess &&
          <FormContainer>
            <form onSubmit={this.handleSubmit} name="contact" data-netlify="true" data-netlify-honeypot="bot">
              <div className="item">
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={this.handleChange} />
              </div>
              <div className="item">
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={this.handleChange} />
              </div>
              <div className="item">
                <label>Message</label>
                <textarea name="message" value={message} onChange={this.handleChange} />
              </div>
              <Button type="submit">Send</Button>
            </form>
          </FormContainer>
        }

        {this.state.formSuccess &&
          <DownloadsContainer>
            <h2>SUCCESS</h2>
            <Divider />
            <div>
              <div className="download-link">
                <h4>HTECH PRODUCT DATA SHEET (Mining)</h4>
                <a href={htechDataSheet} target="_blank">
                  <img src={download} />
                </a>
              </div>
              <div className="download-link">
                <h4>MTECH-DEGREASER PDS</h4>
                <a href={mtechDegreaserPDS} target="_blank">
                  <img src={download} />
                </a>
              </div>
              <div className="download-link">
                <h4>BIODEGRADABILITY CERTIFICATE (M&BTech)</h4>
                <a href={biodegradabilityCertificate} target="_blank">
                  <img src={download} />
                </a>
              </div>
              <div className="download-link">
                <h4>CHROME GRADE VS DOSAGE</h4>
                <a href={chromeGradeVsDosage} target="_blank">
                  <img src={download} />
                </a>
              </div>
              <div className="download-link">
                <h4>DISFLO-PT TEST</h4>
                <a href={disfloPtTest} target="_blank">
                  <img src={download} />
                </a>
              </div>
              <div className="download-link">
                <h4>HTECH FEASABILITY REPORT</h4>
                <a href={htechFeasabilityReport} target="_blank">
                  <img src={download} />
                </a>
              </div>
              <div className="download-link">
                <h4>HTECH HYDROCARBON ELIMINATOR WEB</h4>
                <a href={htechHydrocarbonEliminator} target="_blank">
                  <img src={download} />
                </a>
              </div>
              <div className="download-link">
                <h4>LUBRITECH MANUFACTURING B-BBEE CERTIFICATE</h4>
                <a href={lubritechBee} target="_blank">
                  <img src={download} />
                </a>
              </div>
              <div className="download-link">
                <h4>STD TEST</h4>
                <a href={stdTest} target="_blank">
                  <img src={download} />
                </a>
              </div>
            </div>
          </DownloadsContainer>
        }
      </div>
    );
  }
}

export default DownloadsPage