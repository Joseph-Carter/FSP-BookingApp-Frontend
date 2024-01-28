import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
		fetch(`${API}/eventspace`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(eventspaces),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("Event Space updated:", data);
				navigate("/eventspace");
			})
			.catch((err) => {
				console.error("Error:", err);
			});
	};

	const handleChange = (e) => {
		setEventspaces({ ...eventspaces, [e.target.name]: e.target.value });
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='name'
				id='name'
				value={eventspaces.name}
				placeholder='Event Space Name'
				onChange={handleChange}
			/>
			<input
				type='number'
				name='capacity'
				value={eventspaces.capacity}
				placeholder='Capacity'
				onChange={handleChange}
			/>
			<input
				type='text'
				name='location'
				id='location'
				value={eventspaces.location}
				placeholder='Location'
				onChange={handleChange}
			/>
			<input
				type='text'
				name='image'
				id='image'
				value={eventspaces.image}
				placeholder='Image'
				onChange={handleChange}
			/>
			<input
				type='text'
				name='description'
				id='description'
				value={eventspaces.description}
				placeholder='Description'
				onChange={handleChange}
			/>
			<button type='submit'>Submit Event Space</button>
			<button type='button' onClick={() => navigate("/eventspaces")}>
				Cancel Event Space
			</button>
		</form>
	);
}
