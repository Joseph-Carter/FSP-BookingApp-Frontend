import React from 'react'
import BookingNewForm from './BookingNewForm'
import EventSpace from './EventSpace'


// shows individual event spaces and a booking form
export default function EventSpaceDetails() {

  return (
    <div>
      <EventSpace space={space} />
      <p>{space.description}</p>
      <BookingNewForm />
    </div>
  )
}
