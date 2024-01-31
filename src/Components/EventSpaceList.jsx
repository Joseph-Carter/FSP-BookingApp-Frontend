// EventSpaceList.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EventSpace from './EventSpace';

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

export default function EventSpaceList() {
  const [eventSpaces, setEventSpaces] = useState([]);

  useEffect(() => {
    fetch(`${API}/eventspaces`)
      .then((res) => res.json())
      .then((data) => {
        setEventSpaces(data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, []);

  return (
    <EventSpaceListContainer>
        <h2>Available Spaces</h2>
      <EventSpaceGrid>
      {eventSpaces.length > 0 ? (
          eventSpaces.map(space => <EventSpace key={space.id} space={space} />)
        ) : (
          <p>No Event spaces found</p>
        )}
      </EventSpaceGrid>
    </EventSpaceListContainer>
  );
}
