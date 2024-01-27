import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

// allows booking of event space 
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
      navigate("/bookings")
    })
    .catch((err) => {
      console.error('Error:', err);
    })
  };

  const handleChange = (e) => {
    setNewBooking({ ...newBooking, [e.target.name]: e.target.value })
  };

  return (
    <form>
      <input type="text" name="name" placeholder="Event Name" onChange={handleChange} required />
      <input type="number" name="user_id" placeholder="Client Name" onChange={handleChange} required />
      <input type="number" name="room_id" placeholder="Room Name" onChange={handleChange} required />
      <input type="dateTime" name="start_date"  onChange={handleChange} required />
      <input type="dateTime" name="end_date"  onChange={handleChange} required />
      <input type="number" name="attendees" placeholder="Number of Attendees Name" onChange={handleChange}  />
      <textarea name="special_requirements" placeholder="Special aRequirements" onChange={handleChange}></textarea>
      <button name="submit">Submit Booking</button>
    </form>
  )
}

export default BookingNewForm