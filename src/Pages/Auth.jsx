import React, { useEffect } from "react";
import LoginForm from "../Components/LoginForm";
import { useLocation } from "react-router-dom";
import SignUpForm from "../Components/SignUpForm";
import "./Auth.css"
import cosmicConnectLogo from "../assets/cosmicConnectLogo.png"

const Auth = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="splashBackground">
        <div className="splashBackground-image" />
        <div className="splashBackground-image" />
        <div className="splashBackground-image" />
      </div>
      <div className="bookingAuth">
      <p  className='cosmicConnectLogo' />
        {pathname.includes("login") ? (
          <LoginForm />
        ) : (
          <SignUpForm />
        )}
      </div>
    </>
  );
};

export default Auth;
