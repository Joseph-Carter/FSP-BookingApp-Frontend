import React, { useEffect, useState } from 'react'
import Booking from './Booking';
const API = import.meta.env.VITE_API_URL;
// list of existing booking
export default function BookingList() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch(`${API}/bookings`) 
        .then((res) => res.json())
        .then((bookings) => {
            console.log(bookings);
            setBookings(bookings);
        })
        .catch((err) => {
            console.error("Error fetching data:", err);
        })
    }, [])

  return (
    <div>
        {bookings.map((booking) => (
               <Booking key={booking.id} booking={booking} />
        ))}      
    </div>
  )
}
