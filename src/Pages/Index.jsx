import React from 'react'
import EventSpaceList from '../Components/EventSpaceList'
import BookingList from '../Components/BookingList'
import Footer from '../Components/Footer'

export default function Index() {
  return (
    <div>
      <EventSpaceList />
      <BookingList />
      <Footer />
    </div>
  )
}
