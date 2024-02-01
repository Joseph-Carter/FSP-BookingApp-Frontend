import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Booking from "./Booking";
import Header from "./Header";

const API = import.meta.env.VITE_API_URL;

const BookingListContainer = styled.div`
  background-color: #8f8e8e;
  min-height: 100vh;
`;

const BookingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export default function BookingList() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/bookings`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <>
      <Header />
      <BookingListContainer>
        <h2>Existing Bookings</h2>
        <BookingGrid>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <div
                key={booking.id}
                onClick={() => navigate(`/bookings/${booking.id}`)}
              >
                <Booking booking={booking} />
              </div>
            ))
          ) : (
            <p>No bookings found</p>
          )}
        </BookingGrid>
      </BookingListContainer>
    </>
  );
}
