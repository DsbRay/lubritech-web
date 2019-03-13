import React, { Component } from 'react'
import styled from 'styled-components';
import { color, Button, Divider } from '../utils/baseStyles';

import Banner from '../components/pages/banner';
import FileDownloads from '../components/pages/downloads';

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

const Header = styled.div`
  padding-top: 30px;
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
          <Header>
            <h2>FILL IN YOUR DETAILS TO DOWNLOAD THE FOLLOWING</h2>
            <Divider />
            <p>Product MSDS Sheets | Product Data Sheets | Customer Reports | Test Results | HTech Presentation | B-BBEE Certificate</p>
          </Header>
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
          <FileDownloads />
        }
      </div>
    );
  }
}

export default DownloadsPage