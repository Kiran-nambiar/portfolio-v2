import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LayoutHead from "../layout/LayoutHead";
import { Container, Grid } from "@mui/material";
import MuiCard from "../MuiCard";
import { services } from "../../JSON/db";

const Wrapper = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;

  h1 {
    font-family: "Archivo Black", sans-serif;
    color: white;
  }
  span {
    color: red;
  }

  h3,
  h5, h4, p:not(.service-description) {
    color: white;
  }

  
`;

const Technologies = () => {

  const [sortedServiceArray, setSortedServiceArray] = useState([]);

  useEffect(() => {
    const updatedPosition = services.developments.sort((a, b) => {
      return a.position - b.position;
    });
    setSortedServiceArray(updatedPosition);
  }, []);

  return (
    <>
      <LayoutHead url="work" title="Kiran Nambiar | Work" />
      <Wrapper>
        <Container>
          <Grid container>
            <Grid container item>
              <h3>What Do I <span> Work </span> On?</h3>
            </Grid>
            <Grid container item>
              {sortedServiceArray.map((service) => (
                <Grid item xs={4}>
                  <MuiCard service={service} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container >
      </Wrapper>
    </>
  );
};

export default Technologies;
