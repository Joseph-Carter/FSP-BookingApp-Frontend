// Header.js
import React from 'react';
import styled from 'styled-components';
import NavBar from "./NavBar";

const HeroSection = styled.div`
  background-image: url('/Create new Account (3).png'); 
  background-size: cover;
  background-position: center;
  width: 100%;
  height: ${props => props.shrink ? '36vh' : '40vh'}; 
  text-align: center;
  position: relative;
`;

const VenueVerse = styled.h1`
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

const Slogan = styled.h2`
  font-family: 'Prata', serif;
  color: #fff;
  font-size: 2.25em;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); // This centers the slogan both vertically and horizontally
  z-index: 2;
  max-width: 80%; // Prevent the slogan from stretching too wide
`;

const DarkOverlay = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const NavBarWrapper = styled.div`
  position: absolute;
  top: calc(20px + 10px);
  right: 0;
  z-index: 2;
`;


const HeaderContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export default function Header() {
  
  
  return (
    <HeaderContainer>
      <HeroSection >
        <DarkOverlay />
        <VenueVerse>VENUEVERSE</VenueVerse>
        <NavBarWrapper>
        <NavBar />
        </NavBarWrapper>
        <Slogan><span>Meeting space for every need,</span>
        <br />
        <span>just a click away.</span></Slogan>
      </HeroSection>
    </HeaderContainer>
  );
}
