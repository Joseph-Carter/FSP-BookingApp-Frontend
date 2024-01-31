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

export default function EventSpace({ event }) {

  return (
    <div>
      <BookingButton>Book Now</BookingButton>
      <p>{event.space}</p>
      <p>{event.capacity}</p>
      <p>{event.location}</p>
      {event.image ? <SpaceImage src={event.image} alt={event.space} /> : null}    
    </div>
  );
}
