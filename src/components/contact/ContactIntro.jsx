import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  p {
    font-family: "Archivo Black", sans-serif;
    color: white;
    font-size: 100px;
    @media (max-width: 992px) {
      margin: auto;
      text-align: center;
    }
    @media (max-width: 768px) {
      font-size: 10vw;
    }
  }


.contact {
	outline: none;
	text-decoration: none;
  margin-left: 200px;
	position: relative;
	font-size: 100px;
	line-height: 1;
	color: red;
	display: inline-block;
}

// Text Effect Styles
.contact-animation {
  text-transform: uppercase;
  font-weight: 900;
  overflow: hidden;
  top: 25px;
  color: black;
  -webkit-text-stroke: 2px red;

  &:hover {
    color: red;
  }
  &::after {
    content: '';
    position: absolute;
    height: 16px;
    width: 100%;
    top: 50%;
    margin-top: -8px;
    right: 0;
    background: white;
    transform: translate3d(-100%,0,0);
    transition: transform 0.7s;
    transition-timing-function: cubic-bezier(0.7,0,0.3,1);
  }
  &:hover::after {
    transform: translate3d(100%,0,0);
  }
  &::before{
    position: absolute;
    z-index: 2;
    overflow: hidden;
    color: red;
    white-space: nowrap;
    width: 0%;
    transition: width 0.4s 0.3s;
  }
  &:hover::before {
    width: 100%;
  }
}
`;

const ContactIntro = () => {
  return (
    <Wrapper>
      <Grid container maxWidth="lg">
        <Grid item xs={12} className="contact-me-intro-container">
          <p className="contact-intro">
            Feel free to <br />
            <a href="#form">
              <span className="contact contact-animation">CONTACT</span>
            </a>
            &nbsp;me
          </p>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default ContactIntro;
