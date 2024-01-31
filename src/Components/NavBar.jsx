import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {

  return (
    <nav className="navbar-container">
      <Link to={`/rooms`}>Rooms</Link>
      <h2 className="recentPosts navlink">
        <Link to={`/bookings`}>Recent Bookings</Link>
      </h2>
      <h2 className="newPosts navlink">
        <Link to={`/bookings/new`}>New Booking</Link>
      </h2>
      <h2 className="logout navlink">
        <Link to={`/login`}>Log Out</Link>
      </h2>
    </nav>
  );
};

export default NavBar;