import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import EventSpacesDropdown from './EventSpacesDropdown';

const API = import.meta.env.VITE_API_URL;

export default function BookingNewForm() {
  const [newBooking, setNewBooking] = useState({
    name: "",
    user_id: "",
    room_id: "",
    start_date: "",
    end_date: "",
    attendees: 0,
    special_requirements: ""
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBooking),
    })
    .then(res => res.json())
    .then(data => {
      console.log('Booking created:', data);
      navigate("/bookings");
    })
    .catch((err) => {
      console.error('Error:', err);
    });
  };

  const handleChange = (e) => {
    setNewBooking({ ...newBooking, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Event Name" onChange={handleChange} required />
      <input type="text" name="user_id" placeholder="Client ID" onChange={handleChange} required />
      <input type="text" name="room_id" placeholder="Room ID" onChange={handleChange} required />
      <input type="datetime-local" name="start_date" onChange={handleChange} required />
      <input type="datetime-local" name="end_date" onChange={handleChange} required />
      <input type="number" name="attendees" placeholder="Number of Attendees" onChange={handleChange} />
      <textarea name="special_requirements" placeholder="Special Requirements" onChange={handleChange}></textarea>
      <EventSpacesDropdown />
      <button type="submit">Submit Booking</button>
      <button type="button" onClick={() => navigate("/bookings")}>Cancel Booking</button>
    </form>
  );
}
