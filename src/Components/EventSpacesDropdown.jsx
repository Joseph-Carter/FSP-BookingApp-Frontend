import { useState, useEffect, React } from "react";

const API = import.meta.env.VITE_API_URL;

export default function EventSpacesDropdown({ preselectedSpaceId }) {
	const [events, setEvents] = useState([]);
	const [selected, setSelected] = useState("");

	useEffect(() => {
		fetch(`/${API}/events`)
			.then((response) => response.json())
			.then((data) => setEvents(data))
			.catch((error) => console.error("Error:", error));
	}, []);

	const handleSelectChange = (e) => {
		setSelected(e.target.value);
	};

	return (
		<select
			name='events_id'
			defaultValue={preselectedSpaceId || ""}
			onChange={handleSelectChange}>
			{events.map((event) => (
				<option key={event.id} value={event.id}>
					{event.space_name}
				</option>
			))}
		</select>
	);
}
