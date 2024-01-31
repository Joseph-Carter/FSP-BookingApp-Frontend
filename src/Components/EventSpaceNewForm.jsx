import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EventSpaceNewForm.css";

const API = import.meta.env.VITE_API_URL;

// add new event spaces admin only or managers
export default function EventSpaceNewForm() {
	const [eventspaces, setEventspaces] = useState({
		name: "",
		capacity: 0,
		location: "",
		image: "",
		description: "",
	});

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(`${API}/eventspaces`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(eventspaces),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("Event Space updated:", data);
				navigate(`/eventspaces`);
			})
			.catch((err) => {
				console.error("Error:", err);
			});
	};

	const handleChange = (e) => {
		setEventspaces({ ...eventspaces, [e.target.name]: e.target.value });
	};
	return (
		<div class="form-container">
    <form onSubmit={handleSubmit}>
        <input 
            className='input-text'
            type='text'
            name='name'
            id='name'
            value={eventspaces.name}
            placeholder='Event Space Name'
            onChange={handleChange}
        />
        <input 
            className='input-number'
            type='number'
            name='capacity'
            value={eventspaces.capacity}
            placeholder='Capacity'
            onChange={handleChange}
        />
        <input 
            className='input-text'
            type='text'
            name='location'
            id='location'
            value={eventspaces.location}
            placeholder='Location'
            onChange={handleChange}
        />
        <input
            className='input-text'
            type='text'
            name='image'
            id='image'
            value={eventspaces.image}
            placeholder='Image'
            onChange={handleChange}
        />
        <input
            className='input-text'
            type='text'
            name='description'
            id='description'
            value={eventspaces.description}
            placeholder='Description'
            onChange={handleChange}
        />
        <button className='submit-button' type='submit'>Submit</button>
        <button className='cancel-button' type='button' onClick={() => navigate(`/eventspaces`)}>
            Cancel
        </button>
    </form>
</div>

	);
}
