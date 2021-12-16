import React from "react";
import { Helmet } from "react-helmet";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Wrapper } from "./styles";

const Homepage = () => {
  return (
    <Wrapper>
      <Helmet>
        <meta property="og:url" content="http://www.kirannambiar.in" />
      </Helmet>
      <Grid container>
        <Grid item xs={12} md={6}>
          <div className="intro">
            <Link to="/about">
              <h1 className="hello mx-auto my-20">
              </h1>
            </Link>
            <Link to="/work">
              <h1
                className="iam whoami mx-auto my-20"
              >
              </h1>
            </Link>
            <Link to="/contact">
              <h1
                className="name whoami mx-auto my-20"
              >
              </h1>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Homepage;
