import React from "react";

export default function EventSpacesDropdown({ preselectedSpaceId }) {
    const [eventSpaces, setEventSpaces] = useState([]);

    useEffect(() => {
        fetch('/api/eventspaces')
            .then(response => response.json())
            .then(data => setEventSpaces(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <select name="eventspaces_id" defaultValue={preselectedSpaceId || ''}>
            {eventSpaces.map(space => (
                <option key={space.id} value={space.id}>{space.space_name}</option>
            ))}
        </select>
    );
};
