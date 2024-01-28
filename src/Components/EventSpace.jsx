import React from "react";

export default function EventSpace({ space }) {

  return (
    <div>
      <p>{space.name}</p>
      <p>{space.capacity}</p>
      <p>{space.location}</p>
      {space.image ? <img src={space.image} /> : null}    </div>
  );
}
