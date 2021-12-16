import styled from "styled-components";
import home from "../../assets/images/home.jpg";

export const Wrapper = styled.section`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  background-image: url(${home});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  min-height: 100vh;
  animation: fadeIn 1s ease-in-out;
  display: flex;

  .intro {
    font-family: "Roboto", sans-serif;
    animation: none;
    font-size: 80px;
    position: relative;
    left: 200px;
    top: 100px;
  }

  .hello:after {
    content: "Hello.";
    color: white;
    @media (max-width: 576px) {
      content: "About";
    }
  }

  .hello:hover:after {
    content: "About";
    margin-left: 50px;
    transition: ease-in-out 500ms;
    @media (max-width: 576px) {
      margin-left: unset;
    }
  }

  .iam:after {
    content: "I am";
    color: #ff0000;
    @media (max-width: 576px) {
      content: "Work";
    }
  }

  .iam:hover:after {
    content: "Work";
    margin-left: 50px;
    transition: ease-in-out 500ms;
    @media (max-width: 576px) {
      margin-left: unset;
    }
  }

  .name:after {
    content: "Kiran";
    color: #ff0000;
    @media (max-width: 576px) {
      content: "Contact";
    }
  }

  .name:hover:after {
    content: "Contact";
    margin-left: 50px;
    transition: ease-in-out 500ms;
    @media (max-width: 576px) {
      margin-left: unset;
    }
  }

  a {
    text-decoration: none;
  }

  .my-20 {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
