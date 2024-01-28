import React, { useEffect } from 'react'
import LoginForm from "../Components/LoginForm";
import { useLocation } from "react-router-dom";
import SignUpForm from "../Components/SignUpForm";

const Auth = ({ setShowNavbar }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    setShowNavbar(false);
  }, [setShowNavbar]);
  
  return (
    <>
      <div className="bookingAuth"> 
      {pathname.includes("login") ? <LoginForm setShowNavbar={setShowNavbar} /> : <SignUpForm setShowNavbar={setShowNavbar} />}
      </div>
    </>
  );
};

export default Auth;