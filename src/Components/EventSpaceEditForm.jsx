import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./EventSpaceEditForm.css";

const API = import.meta.env.VITE_API_URL;

export default function EventSpaceEditForm() {
	const [ events, setEvents ] = useState({
		name: "",
		capacity: 0,
		location: "",
		image: "",
		description: "",
	});

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
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
				navigate(`/events`);
			})
			.catch((err) => {
				console.error("Error:", err);
			});
	};

	const handleChange = (event) => {
		setEvents({ ...events, [event.target.name]: event.target.value });
	};

	return (
		<>
		<Header />
			<div className='EventSpaceEditForm-container'>
				<form className='EventSpaceEditForm' onSubmit={handleSubmit}>
					<fieldset>
						<legend>Edit Event Space</legend>
						<input
							type='text'
							name='name'
							id='EventSpaceEditForm-name'
							value={events.name}
							placeholder='Event Space Name'
							onChange={handleChange}
						/>
						<br />
						<input
							type='number'
							name='capacity'
							id='EventSpaceEditForm-capacity'
							value={events.capacity}
							placeholder='Capacity'
							onChange={handleChange}
						/>
						<br />
						<input
							type='text'
							name='location'
							id='EventSpaceEditForm-location'
							value={events.location}
							placeholder='Location'
							onChange={handleChange}
						/>
						<br />
						<input
							type='text'
							name='image'
							id='EventSpaceEditForm-image'
							value={events.image}
							placeholder='Image'
							onChange={handleChange}
						/>
						<br />
						<input
							type='text'
							name='description'
							id='EventSpaceEditForm-description'
							value={events.description}
							placeholder='Description'
							onChange={handleChange}
						/>
						<br />
						<button type='submit' className="EventSpaceEditForm-submit">Update</button>
						<br />
						<button type='button' className="EventSpaceEditForm-cancel" onClick={() => navigate(`/events`)}>
							Cancel 
						</button>
					</fieldset>
				</form>
				<div className='EventSpaceEditForm-image-preview'>
					<img src={events.image} />
				</div>
			</div>
		</>
	);
}
