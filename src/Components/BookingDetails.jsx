import React from "react";
import Booking from "./Booking";
import { Link, useNavigate } from "react-router-dom";

// shows specific booking and options for modifying
export default function BookingDetails({ booking }) {
const navigate = useNavigate();

  const handleDelete = () => {
    const httpOptions = { method: "DELETE" };
    fetch(`${API}/bookings/${booking.id}`, httpOptions)
      .then(() => navigate("/bookings"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h3>Booking Details</h3>
      <h4>Event Name: </h4>
      <Booking booking={booking} />
      <p>Start Date: {booking.start_date}</p>
      <p>End Date: {end_date}</p>
      <p>Spaced Used: </p>
      <p>Attendees:</p>
      <p>Checkout status: {checkout ? "Yes" : "No"}</p>
      <Link to={`/bookings/${booking.id}/edit`}><button>Cancel</button></Link>
      <button>Update</button>
    </div>
  );
}
