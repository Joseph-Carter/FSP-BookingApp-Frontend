import React, { useEffect, useState } from 'react'
import EventSpace from './EventSpace'
import "./Card.css";
import BookingNewForm from "./BookingNewForm";
const API = import.meta.env.VITE_API_URL;
// list all available event spaces
export default function EventSpaceList() {
  const [eventSpaces, setEventSpaces] = useState([]);

    useEffect(() => {
        fetch(`${API}/events`) 
        .then((res) => res.json())
        .then((space) => {
            console.log(space);
            setEventSpaces(space);
        })
        .catch((err) => {
            console.error("Error fetching data:", err);
        })
    }, [])

  return (
        <div>
    {eventSpaces.length > 0 ? (
        eventSpaces.map((space) => (

            <EventSpace key={space.id} space={space} />
        ))
    ) : (
        <p>No Event spaces found</p>
    )}
    <div>
    <BookingNewForm />
    </div>
</div>

  )
}
