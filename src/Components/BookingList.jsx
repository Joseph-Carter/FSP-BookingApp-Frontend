import React, { useEffect, useState } from 'react'
import Booking from './Booking';
import Header from './Header';

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
    <>
    <Header />
        <div>
    {bookings.length > 0 ? (
        bookings.map((booking) => (
            <Booking key={booking.id} booking={booking} />
        ))
    ) : (
        <p>No bookings found</p>
    )}
</div>
</>
  )
}
