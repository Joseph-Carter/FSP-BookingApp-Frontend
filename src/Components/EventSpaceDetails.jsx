import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="event-space-details">
        {/* Event details go here */}
      </div>
      <button onClick={() => setModalOpen(true)}>New Booking</button>
      <BookingModal isOpen={isModalOpen} close={() => setModalOpen(false)}>
        <BookingNewForm event={event} />
      </BookingModal>
    </>
  );
}
