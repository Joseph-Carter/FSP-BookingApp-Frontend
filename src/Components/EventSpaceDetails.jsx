import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import BookingModal from './BookingModal';
import BookingNewForm from './BookingNewForm';
import Header from './Header';
import { ButtonsContainer } from '../Pages/Hero';

const API = import.meta.env.VITE_API_URL;

const DeleteButton = styled.button`
  background: #8f8e8e;
  padding: 5px 40px; 
  border: 2px solid white;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1.5em;
  color: black;
  transform: scale(1.1);
  box-shadow: 0 0 15px rgb(255, 249, 249);
  `;
const BackButton = styled.button`
  background: #8f8e8e;
  padding: 5px 40px; 
  border: 2px solid white;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1.5em;
  color: black;
  transform: scale(1.1);
  box-shadow: 0 0 15px rgb(255, 249, 249);
  `;  

const NewButton = styled.button`
  background: #8f8e8e;
  padding: 5px 40px; 
  border: 2px solid white;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1.5em;
  color: black;
  transform: scale(1.1);
  box-shadow: 0 0 15px rgb(255, 249, 249);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly; 
  align-items: center;
  margin-top: 20px;
`;

const handleOpenModal = () => {
  setModalOpen(true);
};

const handleCloseModal = () => {
  setModalOpen(false);
};


export default function EventSpaceDetails() {
  const [event, setEvent] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      })
      .catch((err) => {
        console.error('Error:', err);
      });
  }, [id]);

  

  const handleDelete = () => {
    fetch(`${API}/events/${id}`, { method: "DELETE" })
      .then(() => navigate("/events"))
      .catch((error) => console.error("Error:", error));
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="event-space-details">
      <h2>{event.space_name}</h2>
        <p>Capacity: {event.capacity}</p>
        <p>Location: {event.location}</p>
        {event.image && <img src={event.image}  width="900px" alt={event.space_name} className="event-space-image" />}
        <p>Description: {event.description}</p>      </div>
      <ButtonsContainer>
      <NewButton onClick={() => setModalOpen(true)}>New Booking</NewButton>
      <Link to="/events"><BackButton>Back to Events</BackButton></Link>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
      </ButtonsContainer>
      <BookingModal isOpen={isModalOpen} close={() => setModalOpen(false)}>
        <BookingNewForm event={event} />
      </BookingModal>
    </>
  );
}
