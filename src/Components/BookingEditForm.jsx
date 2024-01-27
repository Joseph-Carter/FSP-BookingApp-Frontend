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
