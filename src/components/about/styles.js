import styled from "styled-components";

export const Wrapper = styled.section`
  .do-as-developer {
    color: white;
    @media (max-width: 992px) {
      margin: auto;
    }
    @media (max-width: 576px) {
      padding-left: 20px;
      margin: auto;
    }
  }

  .full-stack {
    color: white;
    text-align: center;
    font-size: 18px;
  }

  .company-link {
    color: red;
  }

  span {
    color: black;
  }

  .aboutus-img {
    width: 100%;
    max-width: 500px;
  }

  img {
    width: 100px;
    height: auto;
    margin: auto;
    display: flex;
    align-items: center;
  }

  .icon {
    padding: 5% 10% 5% 10%;
    @media (max-width: 600px) {
      padding: 5% 5% 5% 5%;
    }
  }

  .full-stack-logo {
    width: 70px;
    height: 70px;
  }
`;
