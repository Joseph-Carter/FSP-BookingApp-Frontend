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

    const addEvent = () => {
        fetch(`${API}/events`, {
                method: "POST",
                body: JSON.stringify(events),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(() => {
                navigate(`/events`);
            })
            .catch((error) => console.error("catch", error));
        };

	const handleChange = (event) => {
		setEvents({ ...events, [event.target.id]: event.target.value });
	};

    const handleSubmit = (event) => {
        event.preventDefault();
        addEvent();
    };

	return (
		<>
		<Header />
		<div className="form-container">
            <h2>Add Event Space</h2>
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label>
        <input 
            className='input-text'
            type='text'
            name='name'
            id='name'
            required
            value={events.space_name}
            placeholder='Event Space Name'
            onChange={handleChange}
        />
        <label htmlFor="capacity">Capacity:</label>
        <input 
            className='input-number'
            type='number'
            id='number'
            name='capacity'
            required
            value={events.capacity}
            placeholder='Capacity'
            onChange={handleChange}
        />
        <label htmlFor="location">Location:</label>
        <input 
            className='input-text'
            type='text'
            name='location'
            id='location'
            required
            value={events.location}
            placeholder='Location'
            onChange={handleChange}
        />
        <label htmlFor="image">Image:</label>
        <input
            className='input-text'
            type='text'
            name='image'
            id='image'
            value={events.image}
            placeholder='Image'
            onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <input
            className='input-text'
            type='text'
            name='description'
            id='description'
            value={events.description}
            placeholder='Description'
            onChange={handleChange}
        />
        <div>
        <button className='submit-button' type='submit'>Submit</button>
        <button className='cancel-button' type='button' onClick={() => navigate(`/events`)}>
            Cancel
        </button>
        </div>
    </form>
</div>
</>
	);
}
