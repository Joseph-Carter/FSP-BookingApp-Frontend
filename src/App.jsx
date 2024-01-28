import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./Components/UserAuth/UserContext";
import EventSpaceList from "./Components/EventSpaceList";
import EventSpaceDetails from "./Components/EventSpaceDetails"; 
import EventSpaceNewForm from "./Components/EventSpaceNewForm"
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
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/signup" element={<Auth />} />
          <Route path="/bookings" element={<BookingList />} />
          <Route path="/booking/:id" element={<BookingDetails />} />
          <Route path="/booking/:new" element={<BookingNewForm />} />
          <Route path="/booking/:edit" element={<BookingEditForm />} />
          <Route path="/eventspace" element={<EventSpaceList />} />
          <Route path="/eventspace/:id" element={<EventSpaceDetails />} />
          <Route path="/eventspace/:new" element={<EventSpaceNewForm />} />
          <Route path="/eventspace/:edit" element={<EventSpaceNewForm />} />
          <Route path="*" element={<Four0Four />} />
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
