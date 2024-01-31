import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EventSpacesDropdown from './EventSpacesDropdown';
import './BookingEditForm.css'

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
            navigate(`/bookings`);
        })
        .catch(error => console.error(error));
    };

    return (
		<div className='BookingEditForm-container'>
				<form className='BookingEditForm' onSubmit={handleSubmit}>
				<fieldset>
					<legend>Edit Booking</legend>
					<input
						type='text'
						name='name'
						id='BookingEditForm-name'
						value={booking.name}
						onChange={handleChange}
						placeholder='Event Name'
						required
					/>
					<br />
					<input
						type='number'
						name='user_id'
						id='BookingEditForm-user_id'
						value={booking.user_id}
						onChange={handleChange}
						placeholder='Client Name'
						required
					/>
					<br />
					<input
						type='number'
						name='room_id'
						id='BookingEditForm-room_id'
						value={booking.room_id}
						onChange={handleChange}
						placeholder='Room Name'
						required
					/>
					<br />
					<input
						type='datetime-local'
                        name='start_date'
                        id='BookingEditForm-start_date'
						value={booking.start_date}
						onChange={handleChange}
						required
					/>
					<br />	
					<input
						type='datetime-local'
                        name='end_date'
                        id='BookingEditForm-end_date'
						value={booking.end_date}
						onChange={handleChange}
						required
					/>
					<br />
					<input
						type='number'
                        name='attendees'
                        id='BookingEditForm-attendees'
						value={booking.attendees}
						onChange={handleChange}
						placeholder='Number of Attendees'
					/>
					<br />
					<textarea
                        name='special_requirements'
                        id='BookingEditForm-special_requirements'
						value={booking.special_requirements}
						onChange={handleChange}
						placeholder='Special Requirements'></textarea>
					<br />
					<EventSpacesDropdown />
					<br />
					<button type='submit' className='BookingEditForm-submit'>Update Booking</button>
					<br />
					<button type='button' className='BookingEditForm-cancel' onClick={() => navigate(`/bookings`)}>Cancel</button>
					</fieldset>
			</form>
			
			</div>
		);
}
