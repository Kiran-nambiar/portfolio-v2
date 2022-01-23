import React from "react";
import styled from "styled-components";
// import btnLoader from "../../assets/images/btn-loader.svg";
import { Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import firebase from "../../config/firebase";
import ContactViaSM from "./ContactViaSM";

const Wrapper = styled.section`
  hr {
    border-top: 3px solid red;
  }

  .or-option {
    color: white;
    font-size: 26px;
    font-family: "Archivo Black", sans-serif;
    justify-content: center;
    display: flex;
  }

  .social-media {
    width: 50px;
    margin: auto;
    display: block;
  }

  p {
    text-align: center;
    color: white;
  }

  .social-icons {
    margin: auto;
  }

  a {
    text-decoration: none;
  }

  .social-media-section:hover {
    p {
      transform: scale(0.9);
    }
    img {
      transform: scale(1.2);
    }

    p, img {
      transition: 200ms ease-in;
    }
  }


  .form-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    margin: 50px auto 50px auto ;
  }

  .MuiOutlinedInput-input {
    outline: none;
    color: white;
}

.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline,
.css-1kty9di-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    border-color: white;
    color: white
}

.css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: white;
}


.custom-btn {
  width: 200px;
  height: 40px;
  color: white;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.6s ease;
  position: relative;
  display: inline-block;
  outline: none;
  margin: 20px 0 0 auto;
}

.btn-7 {
background: black;
  line-height: 42px;
  padding: 0;
  border: none;
}
.btn-7 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-7:before,
.btn-7:after {
  position: absolute;
  content: "";
  right: 0;
  bottom: 0;
  background: white;
  transition: all 0.6s ease;
}
.btn-7:before{
   height: 0%;
   width: 2px;
}
.btn-7:after {
  width: 0%;
  height: 2px;
}
.btn-7:hover{
  color: white;
}
.btn-7:hover:before {
  height: 100%;
}
.btn-7:hover:after {
  width: 100%;
}
.btn-7 span:before,
.btn-7 span:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  background: white;
  transition: all 0.6s ease;
}
.btn-7 span:before {
  width: 2px;
  height: 0%;
}
.btn-7 span:after {
  height: 2px;
  width: 0%;
}
.btn-7 span:hover:before {
  height: 100%;
}
.btn-7 span:hover:after {
  width: 100%;
}

.error {
  font-size: 12px;
}

`;

const ContactForm = () => {

  const { register, handleSubmit, formState: { errors }, } = useForm();

  const onSubmit = async (data) => {
    await firebase.firestore().collection("contact").doc().set(data);
  }

  return (
    <Wrapper id="form">
      <Grid container >
        <Grid sm={12} flexDirection="column" display="flex" className="form-input-section mx-auto">
          <span className="drop-msg mx-auto">
            Or incase if you feel like saying a hi to me? Please drop a message.
            I will be happy to hear from you.
          </span>
          <form className="form-section" onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register('fullName', { required: "Please enter your name." })} name="fullName" label="Full Name" variant="outlined" />
            {errors.fullName && <span className="error">{errors.fullName.message}</span>}
            <TextField margin="normal"  {...register('email', { required: "Enter valid email id." })} name="email" label="Email" variant="outlined" />
            {errors.fullName && <span className="error">{errors.email.message}</span>}
            <TextField
              {...register('message', { required: "This field is required." })}
              name="message"
              margin="normal"
              label="Message"
              multiline
              rows={4}
            />
            {errors.fullName && <span className="error">{errors.message.message}</span>}
            <button type="submit" class="custom-btn btn-7"><span>Submit</span></button>
          </form>
        </Grid>
        <Grid item sm={12}>
          <hr className="flex-grow-1" />
          <span className="or-option">OR</span>
          <hr className="flex-grow-1" />
        </Grid>
        <ContactViaSM />
      </Grid>
    </Wrapper>
  );
};

export default ContactForm;
