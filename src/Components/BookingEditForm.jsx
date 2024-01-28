import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EventSpacesDropdown from './EventSpacesDropdown';

const API = import.meta.env.VITE_API_URL;

export default function BookingEditForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [booking, setBooking] = useState({
        name: "",
        user_id: "",
        room_id: "",
        start_date: "",
        end_date: "",
        attendees: 0,
        special_requirements: ""
    });

    useEffect(() => {
        fetch(`${API}/bookings/${id}`)
            .then(response => response.json())
            .then(data => setBooking(data))
            .catch(error => console.error(error));
    }, [id]);

    const handleChange = (e) => {
        setBooking({ ...booking, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${API}/bookings/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
        .then(() => {
            alert(`${booking.name} has been updated!`);
            navigate('/bookings');
        })
        .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                value={booking.name} 
                onChange={handleChange} 
                placeholder="Event Name" 
                required 
            />
            <input 
                type="number" 
                name="user_id" 
                value={booking.user_id} 
                onChange={handleChange} 
                placeholder="Client Name" 
                required 
            />
            <input 
                type="number" 
                name="room_id" 
                value={booking.room_id} 
                onChange={handleChange} 
                placeholder="Room Name" 
                required 
            />
            <input 
                type="datetime-local" 
                name="start_date" 
                value={booking.start_date} 
                onChange={handleChange} 
                required 
            />
            <input 
                type="datetime-local" 
                name="end_date" 
                value={booking.end_date} 
                onChange={handleChange} 
                required 
            />
            <input 
                type="number" 
                name="attendees" 
                value={booking.attendees} 
                onChange={handleChange} 
                placeholder="Number of Attendees" 
            />
            <textarea 
                name="special_requirements" 
                value={booking.special_requirements} 
                onChange={handleChange} 
                placeholder="Special Requirements"
            ></textarea>
			<EventSpacesDropdown />
            <button type="submit">Update Booking</button>
            <button>Cancel</button>
        </form>
    );
}
