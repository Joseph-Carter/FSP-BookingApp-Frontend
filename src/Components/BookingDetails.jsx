import React from "react";
import Booking from "./Booking";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

// shows specific booking and options for modifying
export default function BookingDetails({ booking }) {
  const [showBookingForm, setShowBookingForm] = useState();
const navigate = useNavigate();

useEffect(() => {
  fetch(`${API}/bookings/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setEvent(data);
    })
    .catch((err) => {
      console.error('Error:', err);
    });
}, [id]);

const handleShowBookingForm = () => {
  setShowBookingForm(true);
};

const handleCloseBookingForm = () => {
  setShowBookingForm(false);
}

  const handleDelete = () => {
    const httpOptions = { method: "DELETE" };
    fetch(`${API}/bookings/${booking.id}`, httpOptions)
      .then(() => navigate("/bookings"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="event-space-details">
        <h2>{event.space_name}</h2>
        <p>Capacity: {event.capacity}</p>
        <p>Location: {event.location}</p>
        {event.image && <img src={event.image} alt={event.space_name} />}
        <p>Description: {event.description}</p>
      </div>
      <button onClick={handleShowBookingForm}>New Booking</button>
      {showBookingForm && (
        <div className="modal">
          <BookingNewForm event={event} closeForm={handleCloseBookingForm} />
        </div>
      )}
    </div>
  );
}
