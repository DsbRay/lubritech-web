import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

const ConttactContainer = styled.div`
background-color: red;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: #fff;
  padding: 2rem;
  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

const Header = styled.div`
  h1 {
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  span {
    display: inline-block;
    width: 8rem;
    height: 2px;
    background-color: #CB4541;
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 768px) {
    margin-bottom: 2rem;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (min-width: 1024px) {
    h1 {
      font-size: 2.5rem;
    }
  }
  &.text-center {
    text-align: center;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template: auto auto / 1fr;
  margin-bottom: 2rem;
  input {
    line-height: 50px;
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff;
    padding: 0 1rem;
    font-size: 0.85rem;
    margin-bottom: 1rem;
    &::-webkit-input-placeholder {
      color: #fff;
    }
    &::-moz-placeholder {
      color: #fff;
    }
    &:-ms-input-placeholder {
      color: #fff;
    }
    &:-moz-placeholder {
      color: #fff;
    }
    &:hover, &:active, &:focus {
      outline: none;
    }
  }
  button {
     position: relative;
    line-height: 50px;
    background-color: #CB4541;
    font-size: 0.85rem;
    color: #fff;
    text-transform: uppercase;
    border: 2px solid #CB4541;
    padding: 0 3rem;
    box-sizing: border-box;
    &:hover, &:active, &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
    }
    ul {
      padding: 0px;
      margin: 0px;
      li {
         display: inline-block;
         padding: 0px;
         margin: 0px;
         &.submit {
            margin-left: 5px;
         }
      }
   }
   img {
      position: absolute;
      top: 15px;
      left: 20px;
      width: 20px;
   }
   @keyframes spin {
   from {
        transform: rotate(0deg);
   } to {
        transform: rotate(360deg);
   }
}
  }
  @media (min-width: 768px) {
    grid-template: auto / minmax(300px, 500px) auto;
    justify-content: center;
    input {
      margin-right: 1rem;
      margin-bottom: 0rem;
    }
  }
`;

const FormSuccess = styled.div`
  text-align: center;
  transition: opacity 250ms ease;
  opacity: 0;
  p {
    margin-bottom: 0px;
  }
  &.show {
    opacity: 1;
  }
`;

const encode = (data) => {
   return Object.keys(data)
   .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
   .join("&");
}

class DownloadsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      formSuccess: false,
      posting: false
    };
  }

  onInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  onFormSuccess = () => {
    this.setState({
      formSuccess: true,
      posting: false,
      email: ''
   });
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.setState({
      posting: true
   });
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(this.onFormSuccess)
      .catch(error => alert(error));
  };

  render() {
    const { posting, formSuccess } = this.state;
    return (
      <ConttactContainer id="Contact" className="scroll-contact">
        <Form onSubmit={this.onFormSubmit} name="contact" data-netlify="true" data-netlify-honeypot="bot">
          <input type="hidden" name="form-name" value="contact" />
          <p hidden><label>Don’t fill this out: <input name="bot" onChange={this.handleInputChange} /></label></p>
          <input
            type="email"
            name="email"
            disabled={posting, formSuccess}
            placeholder="Email"
            value={this.state.email}
            onChange={this.onInputChange}
            required
          />
          <button type="submit">Submit</button>
        </Form>
        <FormSuccess className={this.state.formSuccess ? 'show' : ''} >
          <p>Thank you! We will be in touch soon.</p>
        </FormSuccess>
      </ConttactContainer>
    );
  }
}
DownloadsPage.propTypes = {
  data: PropTypes.object,
}
export default DownloadsPage;