import React from 'react'
import BookingNewForm from './BookingNewForm'
import EventSpace from './EventSpace'
import Header from './Header'


// shows individual event spaces and a booking form
export default function EventSpaceDetails({ event }) {

  return (
    <div>
      <EventSpace event={event} />
      {/* <p>{space.description}</p> */}
      <BookingNewForm />
    </div>
  )
}
