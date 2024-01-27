import React from "react";
import Booking from "./Booking";

// shows specific booking and options for modifying
export default function BookingDetails({ booking }) {

  return (
    <div>
      <h3>Booking Details</h3>
      <Booking booking={booking} />
      <button>Update</button>
      <button>Cancel</button>
    </div>
  )
}
