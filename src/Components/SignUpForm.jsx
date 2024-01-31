import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import "./SignUpForm.css";
import { HeroSection, VenueVerse, DarkOverlay } from "../Pages/Hero";

const API = import.meta.env.VITE_API_URL;

const Slogan = styled.h2`
  font-family: 'Prata', serif;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  max-width: 80%;
  text-align: center; // Center align the text
`;

const SignUpForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirmation: "",
  });

  const addUser = () => {
    fetch(`${API}/users/signup`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/login`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextInput = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser();
  };

  return (
    <>
      <HeroSection>
        {" "}
        <DarkOverlay />
        <VenueVerse>VENUEVERSE</VenueVerse>
        <Slogan><span>VenueVerse Symphony:</span>
        <br />
        <span>Every Gathering Tells a Verse.</span>
        </Slogan>
      </HeroSection>
      <br />
      <p></p>
      <br />
      <div className="signUpForm">
        <header className="signupHeader">Sign Up Form</header>{" "}
        <form onSubmit={handleSubmit}>
          <input
            className="firstName signupInput"
            id="firstName"
            value={user.firstName}
            type="text"
            onChange={handleTextInput}
            placeholder="first name"
            required
          />
          <br />
          <input
            className="lastName signupInput"
            id="lastName"
            value={user.lastName}
            type="text"
            onChange={handleTextInput}
            placeholder="last name"
            required
          />
          <br />
          <input
            className="email signupInput"
            id="email"
            value={user.email}
            type="text"
            onChange={handleTextInput}
            placeholder="email"
            required
          />
          <br />
          <input
            className="password signupInput"
            id="password"
            value={user.password}
            type="password"
            onChange={handleTextInput}
            placeholder="password"
            required
          />
          <br />
          <input
            className="confirmPassword signupInput"
            id="passwordConfirmation"
            value={user.passwordConfirmation}
            type="password"
            onChange={handleTextInput}
            placeholder="confirm password"
            required
          />
          <br />
          <button className="submitFormButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
