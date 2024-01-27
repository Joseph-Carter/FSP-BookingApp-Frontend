<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EventSpacesDropdown from './EventSpacesDropdown';

const API = import.meta.env.VITE_API_URL;

export default function BookingEditForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [booking, setBooking] = useState({
        name: "",
        user_id: "",
        room_id: "",
        start_date: "",
        end_date: "",
        attendees: 0,
        special_requirements: ""
    });

    useEffect(() => {
        fetch(`${API}/bookings/${id}`)
            .then(response => response.json())
            .then(data => setBooking(data))
            .catch(error => console.error(error));
    }, [id]);

    const handleChange = (e) => {
        setBooking({ ...booking, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${API}/bookings/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
        .then(() => {
            alert(`${booking.name} has been updated!`);
            navigate('/bookings');
        })
        .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                value={booking.name} 
                onChange={handleChange} 
                placeholder="Event Name" 
                required 
            />
            <input 
                type="number" 
                name="user_id" 
                value={booking.user_id} 
                onChange={handleChange} 
                placeholder="Client Name" 
                required 
            />
            <input 
                type="number" 
                name="room_id" 
                value={booking.room_id} 
                onChange={handleChange} 
                placeholder="Room Name" 
                required 
            />
            <input 
                type="datetime-local" 
                name="start_date" 
                value={booking.start_date} 
                onChange={handleChange} 
                required 
            />
            <input 
                type="datetime-local" 
                name="end_date" 
                value={booking.end_date} 
                onChange={handleChange} 
                required 
            />
            <input 
                type="number" 
                name="attendees" 
                value={booking.attendees} 
                onChange={handleChange} 
                placeholder="Number of Attendees" 
            />
            <textarea 
                name="special_requirements" 
                value={booking.special_requirements} 
                onChange={handleChange} 
                placeholder="Special Requirements"
            ></textarea>
			<EventSpacesDropdown />
            <button type="submit">Update Booking</button>
            <button>Cancel</button>
        </form>
    );
}

=======
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function BookingEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newBooking, setNewBooking] = useState({
    name: "",
    dateTime: new Date(),
    attendees: 0,
    requirements: "",
    created_at: "",
    updated_at: "",
  });

  const handleNameChange = (e) => {
    setNewBooking({ ...newBooking, name: e.target.value });
  };

  const handleDateTimeChange = (e) => {
    setNewBooking({ ...newBooking, dateTime: e.target.value });
  };

  const handleAttendeesChange = (e) => {
    setNewBooking({ ...newBooking, attendees: e.target.value });
  };

  const handleRequirementsChange = (e) => {
    setNewBooking({ ...newBooking, requirements: e.target.value });
  };

  useEffect(() => {
    fetch(`${API}/bookings/${id}`)
      .then((response) => response.json())
      .then((booking) => setBooking(booking))
      .catch((error) => console.error(error));
  }, [id]);

  const httpOptions = {
    method: "PUT",
    body: JSON.stringify(booking),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const updateSuperhero = () => {
    fetch(`${API}/bookings/${id}`, httpOptions)
      .then(() => {
        alert(`${booking.name} has been updated!`);
        navigate(`${API}/bookings/${id}`);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewBooking({ ...newBooking, updated_at: new Date() });
    updateBooking();
  };

  return (
    <div className="edit-booking-form">
      <form className="edit-booking-form" handleSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={newBooking.name}
          onChange={handleNameChange}
          placeholder="Name of Booking"
        />
        <br />
        <label htmlFor="date-time">Date and Time:</label>
        <input
          type="datetime-local"
          name="date-time"
          id="date-time"
          value={newBooking.dateTime}
          onChange={handleDateTimeChange}
        />
        <br />
        <label htmlFor="attendees">Attendees:</label>
        <input
          type="number"
          name="attendees"
          id="attendees"
          value={newBooking.attendees}
          onChange={handleAttendeesChange}
        />
        <br />
        <label htmlFor="special-requirements">Special Requirements:</label>
        <textarea
          name="special-requirements"
          id="special-requirements"
          cols="30"
          rows="10"
          value={newBooking.requirements}
          onChange={handleRequirementsChange}
        ></textarea>
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default BookingEditForm;
>>>>>>> ce3e867b58b681f20db81f33defb80af22e0008f
