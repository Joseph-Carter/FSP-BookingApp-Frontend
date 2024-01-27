import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Components/UserAuth/UserContext";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import UserList from "./Pages/UserList";
import UserDetails from "./Components/UserDetails";
import BookingList from "./Pages/BookingList";
import BookingDetails from "./Pages/BookingDetails";
import RoomList from "./Pages/RoomList";
import RoomDetails from "./Pages/RoomDetails";
import Four0Four from "./Pages/Four0Four";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/bookings" element={<BookingList />} />
          <Route path="/bookings/:id" element={<BookingDetails />} />
          <Route path="/rooms" element={<RoomList />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="*" element={<Four0Four />} />
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
