import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./EventSpaceNewForm.css";


const API = import.meta.env.VITE_API_URL;

// add new event spaces admin only or managers
export default function EventSpaceNewForm() {
	const [events, setEvents] = useState({
		space_name: "",
		capacity: 0,
		location: "",
		image: "",
		description: "",
	});

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!events.name.trim()) {
			alert('Events space name required.')
			return;
		}
		fetch(`${API}/events`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(events),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("Event Space updated:", data);
				navigate(`/events`);
			})
			.catch((err) => {
				console.error("Error:", err);
			});
	};

	const handleChange = (e) => {
		setEvents({ ...events, [e.target.name]: e.target.value });
	};
	return (
		<>
		<Header />
		<div className="form-container">
    <form onSubmit={handleSubmit}>
        <input 
            className='input-text'
            type='text'
            name='name'
            id='name'
            value={events.space_name}
            placeholder='Event Space Name'
            onChange={handleChange}
        />
        <input 
            className='input-number'
            type='number'
            id='number'
            name='capacity'
            value={events.capacity}
            placeholder='Capacity'
            onChange={handleChange}
        />
        <input 
            className='input-text'
            type='text'
            name='location'
            id='location'
            value={events.location}
            placeholder='Location'
            onChange={handleChange}
        />
        <input
            className='input-text'
            type='text'
            name='image'
            id='image'
            value={events.image}
            placeholder='Image'
            onChange={handleChange}
        />
        <input
            className='input-text'
            type='text'
            name='description'
            id='description'
            value={events.description}
            placeholder='Description'
            onChange={handleChange}
        />
        <button className='submit-button' type='submit'>Submit</button>
        <button className='cancel-button' type='button' onClick={() => navigate(`/events`)}>
            Cancel
        </button>
    </form>
</div>
</>
	);
}
