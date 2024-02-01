import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import EventSpace from "./EventSpace";
import Header from "./Header";

const API = import.meta.env.VITE_API_URL;

const EventSpaceListContainer = styled.div`
  background-color: #8f8e8e;
  min-height: 100vh;
`;

const EventSpaceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export default function EventSpaceList() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/events`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <>
      <Header />
      <EventSpaceListContainer>
        <h2>Available Spaces</h2>
        <EventSpaceGrid>
          {events.length > 0 ? (
            events.map((event) => (
              <div
                key={event.id}
                onClick={() => navigate(`/events/${event.id}`)}
              >
                <EventSpace event={event} />
              </div>
            ))
          ) : (
            <p>No Event spaces found</p>
          )}
        </EventSpaceGrid>
      </EventSpaceListContainer>
    </>
  );
}
