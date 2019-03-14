import React from 'react'
import styled from 'styled-components'
import { color } from '../utils/baseStyles'
import logo from '../../static/images/logo.png'
const Container =styled.div`
  min-height: 100vh;
  background: rgb(2,0,36);
  background: 
    linear-gradient(90deg,
    rgba(2,0,36,1) 0%,
    rgba(196,196,196,0.6124824929971988) 0%,
    rgba(255,255,255,1) 50%,
    rgba(196,204,195,1) 100%,
    rgba(9,20,8,1) 100%,
    rgba(196,196,196,1) 100%);
  div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    h1 {
      margin-bottom: 5%;
      letter-spacing: 2px;
      font-size: 3rem;
    }
    img {
      position: relative;
      width: 100%;
      max-width: 400px;
    }
  }
`

const ComingSoon = () => (
  <Container>
    <div>
      <h1><span>Coming</span> Soon</h1>
      <img src={logo} />
    </div>
  </Container>
)

export default ComingSoon