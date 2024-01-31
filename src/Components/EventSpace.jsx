import React from "react";
import styled from 'styled-components';

const BookingButton = styled.button`
  background: white;
  padding: 20px 100px; 
  border: none;
  cursor: pointer;
`;

const SpaceImage = styled.img`
  max-width: 600px; 
  width: 100%; 
  height: auto; 
  display: block; 
  margin: 0 auto;
`;

export default function EventSpace({ space }) {
  return (
    <div>
      <BookingButton>Book Now</BookingButton>
      <p>{space.space_name}</p>
      <p>{space.capacity}</p>
      <p>{space.location}</p>
<<<<<<< HEAD
      {space.image ? <SpaceImage src={space.image} alt={space.space_name} /> : null}    
=======
      {space.image ? <img src={space.image} /> : null}{" "}
>>>>>>> refs/remotes/origin/main
    </div>
  );
}
