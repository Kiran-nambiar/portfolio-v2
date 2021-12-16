import React from "react";
import frontend from "../../assets/images/frontend.svg";
import backend from "../../assets/images/backend.svg";
import deploy from "../../assets/images/deployments.svg";
import { Grid } from "@mui/material";
import { Wrapper } from "./styles";

const AboutDeveloper = () => {
  return (
    <Wrapper>
      <Grid container maxWidth="lg">
        <Grid item xs={12}>
          <h3 className="mt-5 do-as-developer">
            What I Do As A <span> Developer? </span>
          </h3>
        </Grid>
        <Grid item xs={12}>
          <div className="col-12 col-md-8 mx-auto">
            <p className="paragraph color-white">I started my career as Frontend Developer, but I became a full stack developer after I got the oppurtunity to explore and learn more on backend, server and deployments aswell.</p>
            <p className="paragraph color-white">I love balancing creative minds with the need to produce results. I possess excellent communication, React.js, Gatsby, Next.js, JavaScript, Typescript, Django, PostgreSQL, Python, HTML & CSS,
              Bootstrap, MySQL, MongoDB, strategic thinking and planning, time and risk management, teamwork,
              customer satisfaction, decision making and problem-solving skills with an ability to encompass solutions to a
              domain of different real-world problems.</p>
          </div>
        </Grid>
        <Grid xs={12} item container>
          <Grid xs={4} item className="icon">
            <img className="img-fluid full-stack-logo" src={frontend} alt="" />
            <p className="full-stack mt-3">Frontend</p>
          </Grid>
          <Grid xs={4} item className="icon">
            <img className="img-fluid full-stack-logo" src={backend} alt="" />
            <p className="full-stack mt-3">Backend</p>
          </Grid>
          <Grid xs={4} item className="icon">
            <img className="img-fluid full-stack-logo" src={deploy} alt="" />
            <p className="full-stack mt-3 deploy">Deployments</p>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default AboutDeveloper;
