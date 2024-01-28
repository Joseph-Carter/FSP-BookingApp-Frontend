import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

const API = import.meta.env.VITE_API_URL;

export default function EventSpaceEditForm() {
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
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(eventspaces),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("Event Space created:", data);
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
			<button type='submit'>Update Event Space</button>
			<button type='button' onClick={() => navigate("/eventspace")}>
				Cancel Event Space
			</button>
		</form>
	);
}