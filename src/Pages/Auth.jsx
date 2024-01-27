import React from "react";
import LoginForm from "../Components/LoginForm";
import { useLocation } from "react-router-dom";
import SignUpForm from "../Components/SignUpForm";

const Auth = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="bookingAuth"> 
      {pathname.includes("login") ? <LoginForm /> : <SignUpForm />}
      </div>
    </>
  );
};

export default Auth;