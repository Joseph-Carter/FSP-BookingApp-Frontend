import React from 'react'

export default function Booking({ booking }) {
  const {start_date, end_date, checkout, user_id, room_id } = booking;

  return (
    <div>
      <h3>Booking Details</h3>
      <p>Start Date: {booking.start_date}</p>
      <p>End Date: {end_date}</p>
      <p>Checkout status: {checkout ? 'Yes' : 'No'}</p>
      <p>User ID: {user_id}</p>
      <p>Room ID: {room_id}</p>
    </div>
  )
}
