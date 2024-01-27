import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import { AuthProvider } from "./Components/UserAuth/UserContext";
import NavBar from "./Components/NavBar";
<<<<<<< HEAD
import EventSpaceList from "./Components/EventSpaceList";
import EventSpaceDetails from "./Components/EventSpaceDetails"; 
import EventSpaceNewForm from "./Components/EventSpaceNewForm"
=======
>>>>>>> ce3e867b58b681f20db81f33defb80af22e0008f
import BookingList from "./Components/BookingList";
import BookingDetails from "./Components/BookingDetails";
import BookingNewForm from "./Components/BookingNewForm";
import BookingEditForm from "./Components/BookingEditForm";
import Four0Four from "./Pages/Four0Four";
import Auth from "./Pages/Auth";


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
<<<<<<< HEAD
        <NavBar />
        <Routes>
          <Route path="/bookings" element={<BookingList />} />
          <Route path="/booking/:id" element={<BookingDetails />} />
          <Route path="/booking/:new" element={<BookingNewForm />} />
          <Route path="/booking/:edit" element={<BookingEditForm />} />
          <Route path="/rooms" element={<EventSpaceList />} />
          <Route path="/room/:id" element={<EventSpaceDetails />} />
          <Route path="/room/:new" element={<EventSpaceNewForm />} />
          <Route path="/room/:edit" element={<EventSpaceNewForm />} />
          <Route path="*" element={<Four0Four />} />
        </Routes>
=======
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />
            <Route path="/bookings" element={<BookingList />} />
            <Route path="/bookings/:id" element={<BookingDetails />} />
            {/* <Route path="/rooms" element={<RoomList />} /> */}
            {/* <Route path="/rooms/:id" element={<RoomDetails />} /> */}
            <Route path="*" element={<Four0Four />} />
          </Routes>
>>>>>>> ce3e867b58b681f20db81f33defb80af22e0008f
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
