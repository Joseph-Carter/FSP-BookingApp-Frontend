import React from 'react'
import "./Card.css";

export default function Card() {
  
  return (
<div className="eventSpace-CardList-container"> 
  <h1> Event Space List</h1>
  
<div className="eventSpace-CardList-card-grid">
<div className="card">
      <div className="cardTitle">
        <h1>NAME OF CARD</h1>
      </div>
      <div className="imageURL">
        <img src="https://images.pexels.com/photos/16120248/pexels-photo-16120248/free-photo-of-wedding-table-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
      </div>
      <div className="cardText">
        <p>lorem ipsum blah</p>
      </div>
    </div>
    </div>
    </div>
  )
}
