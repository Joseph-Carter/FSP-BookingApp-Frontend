import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

function BookingNewForm ()
{
  const navigate = useNavigate();
  const [ newBooking, setNewBooking ] = useState( {
    name: "",
    dateTime: new Date(),
    attendees: 0,
    requirements: "",
    created_at: ""
  } );
  
  const httpOptions = {
    method: "POST",
    body: JSON.stringify( newBooking ),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const createBooking = () =>
  {
    fetch( `${ API }/bookings`, httpOptions )
      .then( ( response ) =>
      {
        alert( `${ newBooking.name } has been successfully created!` )
        navigate(`${API}/bookings/`)
    })
  }
 const handleNameChange = (e) => {
		setNewBooking({ ...newBooking, name: e.target.value });
 };

 const handleDateTimeChange = (e) => {
		setNewBooking({ ...newBooking, dateTime: e.target.value });
 };

  const handleAttendeesChange = ( e ) =>
  {
   setNewBooking({...newBooking, attendees: e.target.value})
 }

 const handleRequirementsChange = (e) => {
		setNewBooking({ ...newBooking, requirements: e.target.value });
 };
  

const handleSubmit = ( e ) =>
{
  e.preventDefault();
  setNewBooking( { ...newBooking, created_at: new Date() } )
  createBooking()
 }
  return (
    <div className='new-booking-form'>
      <form className='new-booking-form' handleSubmit={ handleSubmit }>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={ newBooking.name }
          onChange={ handleNameChange}
          placeholder='Name of Booking' />
        <br />
        <label htmlFor="date-time">Date and Time:</label>
        <input type="datetime-local" name="date-time" id="date-time" value={ newBooking.dateTime } onChange={ handleDateTimeChange } />
        <br />
        <label htmlFor="attendees">Attendees:</label>
        <input type="number" name="attendees" id="attendees" value={ newBooking.attendees } onChange={ handleAttendeesChange } />
        <br />
        <label htmlFor="special-requirements">Special Requirements:</label>
        <textarea name="special-requirements" id="special-requirements" cols="30" rows="10" value={ newBooking.requirements } onChange={ handleRequirementsChange }></textarea>
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default BookingNewForm