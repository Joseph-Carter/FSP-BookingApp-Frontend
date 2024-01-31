import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./EventSpaceEditForm.css"

const API = import.meta.env.VITE_API_URL;

export default function EventSpaceEditForm() {
	const [events, setEvents] = useState({
		name: "",
		capacity: 0,
		location: "",
		image: "",
		description: "",
	});

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(`${API}/events`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(events),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("Event Space created:", data);
				navigate("/events");
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
		<div class="edit-eventspace-form-container">
			<form class="edit-eventspace-form" onSubmit={ handleSubmit }>
				<input
					type='text'
					name='name'
					id='name'
					value={ events.name }
					placeholder='Event Space Name'
					onChange={ handleChange } />
				<input
					type='number'
					name='capacity'
					value={ events.capacity }
					placeholder='Capacity'
					onChange={ handleChange } />
				<input
					type='text'
					name='location'
					id='location'
					value={ events.location }
					placeholder='Location'
					onChange={ handleChange } />
				<input
					type='text'
					name='image'
					id='image'
					value={ events.image }
					placeholder='Image'
					onChange={ handleChange } />
				<input
					type='text'
					name='description'
					id='description'
					value={ events.description }
					placeholder='Description'
					onChange={ handleChange } />
				<button type='submit'>Update Event Space</button>
				<button type='button' onClick={ () => navigate( `/events`) }>
					Cancel Event Space
				</button>
			</form>
		<div class="edit-eventspace-form-image-preview">
			<img src={ events.image } />
		</div>
		</div>
		</>	
	);
}
