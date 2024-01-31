import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./UserAuth/UserContext";
import "./LoginForm.css"

const API = import.meta.env.VITE_API_URL;

const LoginForm = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const { user, loginUser } = useAuth();

  useEffect(() => {
    if (user.id) {
      navigate(`/events`);
    }
  }, [user]);

  const handleTextInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(userInput);
  };

  return (
    <div class="loginForm">
      <header class="welcomeHeader">Login</header>
      <form onSubmit={handleSubmit}>
        <input
          class="inputEmail inputField"
          id="email"
          value={userInput.email}
          type="text"
          onChange={handleTextInput}
          placeholder="Enter email"
          required
        />
        <br />
        <input
          class="inputPassword inputfield"
          id="password"
          value={userInput.password}
          type="password"
          onChange={handleTextInput}
          placeholder="Enter password"
          required
        />
        <br />
        <button class="loginButton authButtons" type="submit">
          Log In
        </button>
      </form>
      <br />
      <Link to={`/signup`} class="signupButtonWord">
        <button class="signupButton authButtons" type="button">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default LoginForm;