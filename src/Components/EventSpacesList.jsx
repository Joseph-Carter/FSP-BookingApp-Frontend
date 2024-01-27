import React, { useState } from 'react'
import EventSpace from './EventSpace'
const API = import.meta.env.VITE_API_URL;
// list all available event spaces
export default function EventSpacesList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(`${API}/rooms`) 
    .then((res) => res.json())
    .then((rooms) => {
        console.log(rooms);
        setRooms(rooms);
    })
    .catch((err) => {
        console.error("Error fetching data:", err);
    })
}, [])

  return (
    <div>
      {rooms.map((room, index) => (
      <EventSpace key={index} room={room}/>
      ))}
      <button>New Space</button>
    </div>
  )
}
