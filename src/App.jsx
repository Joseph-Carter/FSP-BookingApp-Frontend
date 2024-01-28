import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./Components/UserAuth/UserContext";
import NavBar from "./Components/NavBar";
import BookingList from "./Components/BookingList";
import BookingDetails from "./Components/BookingDetails";
// import RoomList from "./Pages/RoomList";
// import RoomDetails from "./Pages/RoomDetails";
import Four0Four from "./Pages/Four0Four";
import Auth from "./Pages/Auth";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />
            <Route path="/bookings" element={<BookingList />} />
            <Route path="/bookings/:id" element={<BookingDetails />} />
            <Route path="*" element={<Four0Four />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
