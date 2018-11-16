import React, { Component } from 'react'
import styled from 'styled-components';
import { color } from '../utils/baseStyles';

import Banner from '../components/pages/banner';

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
      message: "" 
    };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value 
    });
    console.log(this.state)
  }

  render() {
    const { name, email, message } = this.state;
    return(
      <div>
        <Banner title="Downloads"/>

        <form onSubmit={this.handleSubmit} method="POST" netlify>
          <p>
            <label>
              Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" value={message} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>

      </div>
    );
  }
}

export default DownloadsPage