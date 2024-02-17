import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { AuthProvider } from "./Components/UserAuth/UserContext";
import EventSpaceList from "./Components/EventSpaceList";
import EventSpaceDetails from "./Components/EventSpaceDetails"; 
import EventSpaceNewForm from "./Components/EventSpaceNewForm";
import EventSpaceEditForm from "./Components/EventSpaceEditForm";
import BookingList from "./Components/BookingList";
import BookingDetails from "./Components/BookingDetails";
import BookingNewForm from "./Components/BookingNewForm";
import BookingEditForm from "./Components/BookingEditForm";
import Four0Four from "./Pages/Four0Four";
import Auth from "./Pages/Auth";
import Hero from './Pages/Hero';

const API = import.meta.env.VITE_API_URL;


function App() {

  const [event, setEvent] = useState();
  
  useEffect(() => {
    fetch(`${API}/events`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch`);
        }
        return response.json();
      })
      .then((data) => {
        setEvent(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  return (
    <div className="App">
      
  <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/signup" element={<Auth />} />
          <Route path="/bookings" element={<BookingList />} />
          <Route path="/bookings/:id" element={<BookingDetails />} />
          <Route path="/bookings/new" element={<BookingNewForm />} />
          <Route path="/bookings/edit" element={<BookingEditForm />} />
          <Route path="/bookings/edit" element={ <BookingEditForm /> } />
          <Route path="/events" element={<EventSpaceList />} />
          <Route path="/events/:id" element={<EventSpaceDetails event={event} />} />
          <Route path="/events/new" element={<EventSpaceNewForm event={event} />} />
          <Route path="/events/edit" element={<EventSpaceEditForm event={event} />} />
          <Route path="*" element={<Four0Four />} />
        </Routes>
        </Router>
        </AuthProvider>
     </div>
  );
}

export default App;