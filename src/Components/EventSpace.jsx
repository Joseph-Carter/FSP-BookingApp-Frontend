import React from "react";

export default function EventSpace({ room }) {

  return (
    <div>
      <p>{room.name}</p>
      <p>{room.capacity}</p>
      <p>{room.location}</p>
      {room.image ? <img src={room.image} /> : null}    </div>
  );
}
