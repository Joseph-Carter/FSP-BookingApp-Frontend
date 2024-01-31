import React, { useEffect } from "react";
import LoginForm from "../Components/LoginForm";
import { useLocation } from "react-router-dom";
import SignUpForm from "../Components/SignUpForm";
import "./Auth.css"
import cosmicConnectLogo from "../assets/cosmicConnectLogo.png"

const Auth = ({ setShowNavbar, setShrinkHeader }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    setShowNavbar(false);
    setShrinkHeader(true);  // Tell the Header to shrink
    return () => {
      setShowNavbar(true);  // Reset on component unmount
      setShrinkHeader(false);
    };
  }, [setShowNavbar, setShrinkHeader]);

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
          <LoginForm setShowNavbar={setShowNavbar} />
        ) : (
          <SignUpForm setShowNavbar={setShowNavbar} />
        )}
      </div>
    </>
  );
};

export default Auth;
