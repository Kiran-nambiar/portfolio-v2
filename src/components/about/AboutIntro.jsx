import { Grid } from "@mui/material";
import React from "react";
import about from "../../assets/images/about.jpg";
import { Wrapper } from "./styles";


const AboutIntro = () => {

  return (
    <Wrapper>
      <Grid container maxWidth="lg">
        <Grid item container className="content-spacing-30t" spacing={5}>
          <Grid item xs={6} justifyContent="center" display="flex" flexDirection="column">
            <h3 className="about-intro-title">About</h3>
            <div className="left-content">
              <p className="paragraph color-white">I am a Dynamic, Cross-Functional, and Result-Oriented Full Stack Developer who is always looking to be challenged and to challenge others. Thinking outside the box, driving solutions, and bringing out creative and imaginative thinking is what motivates me. </p>

              <p className="paragraph color-white">I love balancing creative minds with the need to produce results. </p>

              <p className="paragraph color-white">I am working as a Full Stack Developer at <a href="https://1stmain.co/" className="company-link" rel="noopener noreferrer" target="_blank">1stMain</a>, where I am playing a vital role in the growth of the company and delivering exceptional performance by harnessing the power of both my professional and intellectual skills with maximum efforts.</p>
            </div>
          </Grid>
          <Grid item xs={6}>
            <img
              className="aboutus-img"
              src={about}
              alt="Kiran Nambiar | I am a full stack developer. I build websites. I can work on both frontend and backend. I use latest technologies and frameworks like React, Django, Wagtail and much more."
            />
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default AboutIntro;
