import { useState, useEffect, React } from "react";

const API = import.meta.env.VITE_API_URL;

export default function EventSpacesDropdown({ preselectedSpaceId }) {
	const [eventSpaces, setEventSpaces] = useState([]);
	const [selected, setSelected] = useState("");

	useEffect(() => {
		fetch(`/${API}/eventspace`)
			.then((response) => response.json())
			.then((data) => setEventSpaces(data))
			.catch((error) => console.error("Error:", error));
	}, []);

	const handleSelectChange = (e) => {
		setSelected(e.target.value);
	};

	return (
		<select
			name='eventspaces_id'
			defaultValue={preselectedSpaceId || ""}
			onChange={handleSelectChange}>
			{eventSpaces.map((space) => (
				<option key={space.id} value={space.id}>
					{space.space_name}
				</option>
			))}
		</select>
	);
}
