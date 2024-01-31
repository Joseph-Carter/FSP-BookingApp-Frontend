// EventSpaceList.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EventSpace from './EventSpace';
import Header from './Header';
import './EventSpaceList.css'

const API = import.meta.env.VITE_API_URL;

const EventSpaceListContainer = styled.div`
  background-color: #8f8e8e; /* Setting the background color */
  min-height: 100vh; /* Ensuring it covers at least the whole viewport height */
  /* Add other styles here */
`;


const EventSpaceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  /* Add other styles here */
`;

export default function EventSpaceList({  }) {
  const [events, setEvents] = useState([]);
  const [showHeader, setShowHeader] = useState(false);


  useEffect(() => {
    fetch(`${API}/events`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, []);

  useEffect(() => {
    setShowHeader(false);
  }, [setShowHeader]);

  return (
    <>
    <Header />
    <EventSpaceListContainer>
        <h2>Available Spaces</h2>
      <EventSpaceGrid>
      {events.length > 0 ? (
          events.map(event => <EventSpace key={event.id} event={event} />)
        ) : (
          <p>No Event spaces found</p>
        )}
      </EventSpaceGrid>
    </EventSpaceListContainer>
    </>
  );
}
