import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
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
import Hero from './Pages/Hero';
import Layout from './Pages/Layout';

const API = import.meta.env.VITE_API_URL;


function App() {
  let { id } = useParams();
  const [event, setEvent] = useState();

  useEffect(() => {
    fetch(`${API}/events`)
    .then((res) => res.json())
    .then((data) => {
      setEvent(data)
    })
    .catch((err) => {
      console.error('Error fetching data:', err)
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <AuthProvider>
          {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/signup" element={<Auth />} />
          {/* <Route path="/bookings" element={<BookingList />} /> */}
          {/* <Route path="/bookings/:id" element={<BookingDetails />} /> */}
          {/* <Route path="/bookings/new" element={<BookingNewForm />} /> */}
          {/* <Route path="/bookings/edit" element={<BookingEditForm />} /> */}
          <Route path="/events" element={<Layout><EventSpaceList /></Layout>} />
          <Route path="/events/:id" element={<Layout><EventSpaceDetails event={event} /></Layout>} />
          <Route path="/events/new" element={<Layout><EventSpaceNewForm /></Layout>} />
          <Route path="/events/edit" element={<Layout><EventSpaceEditForm /></Layout>} />
          <Route path="/events/:id" element={<EventSpaceDetails event={event} />} />
          <Route path="*" element={<Four0Four />} />
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;