// Hero.js
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../Components/LoginForm';

export const HeroSection = styled.div`
  background-image: url('/Create new Account (3).png');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 40vh;
  text-align: center;
  position: relative;
`;

export const VenueVerse = styled.h1`
  font-family: 'Prata', serif;
  font-size: 2em;
  font-weight: bold;
  color: #fff;
  border: 2px solid white;
  padding: 0.25em 0.5em;
  margin-left: 40px;
  position: absolute;
  top: 20px;
  z-index: 2;
`;

export const Slogan = styled.h2`
  font-family: 'Prata', serif;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  max-width: 80%;
`;

export const Slogan2 = styled.h2`
  font-family: 'Prata', serif;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  max-width: 80%;
`;

export const DarkOverlay = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px; // Adjust based on your design needs
`;

export const Button = styled.button`
  font-family: 'Prata', serif;
  font-size: 1em;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  padding: 10px 20px;
  margin: 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export default function Hero() {
  const navigate = useNavigate();

  return (
    <>
      <HeroSection>
        <DarkOverlay />
        <VenueVerse>VENUEVERSE</VenueVerse>
        <Slogan>Meeting space for every need, just a click away.</Slogan>
      </HeroSection>
    </>
  );
}
