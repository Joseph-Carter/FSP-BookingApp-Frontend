// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 40px;
  gap: 60px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;
  background: black;
  border-radius: 15px;
  padding: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    color: #ddd;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  span {
    margin-top: 5px;
  }
`;

const BookingButton = styled.button`
  background: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    color: #ddd;  }
`;

const NavBar = () => {
  return (
    <NavbarContainer>
      <StyledLink to={`/events`}>
        <img src="/map.jpeg" alt="Event Icon" />
        <span>Spaces</span>
      </StyledLink>
      <StyledLink to={`/bookings`}>
        <img src="/booking.png" alt="Booking Icon" />
        <span>Bookings</span>
      </StyledLink>
      <BookingButton as="button">Sign Out</BookingButton>
    </NavbarContainer>
  );
};

export default NavBar;
