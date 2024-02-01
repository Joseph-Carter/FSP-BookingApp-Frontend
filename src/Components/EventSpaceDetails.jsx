import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import BookingModal from './BookingModal';
import BookingNewForm from './BookingNewForm';
import Header from './Header';

const API = import.meta.env.VITE_API_URL;

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
        {event.image && <img src={event.image} alt={event.space_name} className="event-space-image" />}
        <p>Description: {event.description}</p>      </div>
      <button onClick={() => setModalOpen(true)}>New Booking</button>
      <BookingModal isOpen={isModalOpen} close={() => setModalOpen(false)}>
        <BookingNewForm event={event} />
      </BookingModal>
      <Link to="/events">Back to Events</Link>
    </>
  );
}
