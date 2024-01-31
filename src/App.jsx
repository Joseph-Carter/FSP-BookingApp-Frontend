import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from './Components/NavBar';
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
import Header from './Components/Header';

function App() {


  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/signup" element={<Auth />} />
          {/* <Route path="/bookings" element={<BookingList />} /> */}
          {/* <Route path="/bookings/:id" element={<BookingDetails />} /> */}
          {/* <Route path="/bookings/new" element={<BookingNewForm />} /> */}
          {/* <Route path="/bookings/edit" element={<BookingEditForm />} /> */}
          <Route path="/events" element={<EventSpaceList />} />
          <Route path="/events/:id" element={<EventSpaceDetails />} />
          <Route path="/events/new" element={<EventSpaceNewForm />} />
          <Route path="/events/edit" element={<EventSpaceEditForm />} />
          <Route path="*" element={<Four0Four />} />
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;