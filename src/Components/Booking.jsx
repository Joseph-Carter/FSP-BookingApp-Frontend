import React from "react";
import { Link } from "react-router-dom";

export default function Booking({ booking }) {
  const {
    event_name,
    start_date,
    end_date,
    checkout,
    user_id,
    room_id,
    attendees,
    special_requirements,
  } = booking;

  const startDate = new Date(start_date);
  const endDate = new Date(end_date);

  const formattedStartDate = startDate.toLocaleString();
  const formattedEndDate = endDate.toLocaleString();

  return (
    <div>
      <Link to={`/bookings/${booking.id}/edit`}>
        <h3>Booking Details</h3>
        <p>Event Name: {event_name}</p>
        <p>Start Date: {formattedStartDate}</p>
        <p>End Date: {formattedEndDate}</p>
        <p>Checkout status: {checkout ? "Yes" : "No"}</p>
        <p>Attendees: {attendees}</p>
        <p>Additional Info: {special_requirements}</p>
      </Link>
    </div>
  );
}
