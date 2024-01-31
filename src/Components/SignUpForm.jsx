import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpForm.css"

const API = import.meta.env.VITE_API_URL;

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
    <div class="signUpForm">
      <header class="signupHeader">Sign Up Form</header>
      <form onSubmit={handleSubmit}>
        <input
          class="firstName signupInput"
          id="firstName"
          value={user.firstName}
          type="text"
          onChange={handleTextInput}
          placeholder="first name"
          required
        />
        <br />
        <input
          class="lastName signupInput"
          id="lastName"
          value={user.lastName}
          type="text"
          onChange={handleTextInput}
          placeholder="last name"
          required
        />
        <br />
        <input
          class="email signupInput"
          id="email"
          value={user.email}
          type="text"
          onChange={handleTextInput}
          placeholder="email"
          required
        />
        <br />
        <input
          class="password signupInput"
          id="password"
          value={user.password}
          type="password"
          onChange={handleTextInput}
          placeholder="password"
          required
        />
        <br />
        <input
          class="confirmPassword signupInput"
          id="passwordConfirmation"
          value={user.passwordConfirmation}
          type="password"
          onChange={handleTextInput}
          placeholder="confirm password"
          required
        />
        <br />
        <button class="submitFormButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;