import React, { useEffect } from "react";
import LoginForm from "../Components/LoginForm";
import { useLocation } from "react-router-dom";
import SignUpForm from "../Components/SignUpForm";
import "./Auth.css"
import cosmicConnectLogo from "../assets/cosmicConnectLogo.png"

const Auth = ({ setShowNavbar }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    setShowNavbar(false);
  }, [setShowNavbar]);

  return (
    <>
      <div className="splashBackground">
        <div className="splashBackground-image" />
        <div className="splashBackground-image" />
        <div className="splashBackground-image" />
      </div>
      <div className="bookingAuth">
      <img src={cosmicConnectLogo} className='cosmicConnectLogo' alt="cosmicConnectLogo"/>
        {pathname.includes("login") ? (
          <LoginForm setShowNavbar={setShowNavbar} />
        ) : (
          <SignUpForm setShowNavbar={setShowNavbar} />
        )}
      </div>
    </>
  );
};

export default Auth;
