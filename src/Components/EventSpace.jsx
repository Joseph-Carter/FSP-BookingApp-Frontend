import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const BookingButton = styled.button`
  background: #8f8e8e;
  padding: 15px 60px; 
  border: 2px solid white;
  border-radius: 15px;
  cursor: pointer;
  font-size: 2em;
  color: white;
  transform: scale(1.1);
  box-shadow: 0 0 15px rgb(255, 249, 249);
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
      <Link to={`events/${event.id}`}><BookingButton>Event Space</BookingButton></Link>
      <p>{event.space}</p>
      <p>{event.capacity}</p>
      <p>{event.location}</p>
      {event.image ? <SpaceImage src={event.image} alt={event.space} /> : null}    
    </div>
  );
}
