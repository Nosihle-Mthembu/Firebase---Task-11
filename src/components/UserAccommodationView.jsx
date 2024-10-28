import React, { useState } from 'react';  
import axios from 'axios';  
  
const BookingForm = () => {  
  const [name, setName] = useState('');  
  const [email, setEmail] = useState('');  
  const [phone, setPhone] = useState('');  
  const [checkInDate, setCheckInDate] = useState('');  
  const [checkOutDate, setCheckOutDate] = useState('');  
  const [roomType, setRoomType] = useState('');  
  const [error, setError] = useState(null);  
  
  const handleSubmit = (event) => {  
   event.preventDefault();  
   const bookingData = {  
    name,  
    email,  
    phone,  
    checkInDate,  
    checkOutDate,  
    roomType,  
   };  
  
   axios.post('/api/bookings', bookingData)  
    .then((response) => {  
      const bookingId = response.data.id;  
      // Redirect to payment gateway with booking ID and user details  
      window.location.href = `/payment?bookingId=${bookingId}&name=${name}&email=${email}`;  
    })  
    .catch((error) => {  
      setError(error.message);  
    });  
  };  
  
  return (  
   <form onSubmit={handleSubmit}>  
    <label>  
      Name:  
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />  
    </label>  
    <label>  
      Email:  
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />  
    </label>  
    <label>  
      Phone:  
      <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />  
    </label>  
    <label>  
      Check-in Date:  
      <input type="date" value={checkInDate} onChange={(event) => setCheckInDate(event.target.value)} />  
    </label>  
    <label>  
      Check-out Date:  
      <input type="date" value={checkOutDate} onChange={(event) => setCheckOutDate(event.target.value)} />  
    </label>  
    <label>  
      Room Type:  
      <select value={roomType} onChange={(event) => setRoomType(event.target.value)}>  
       <option value="">Select Room Type</option>  
       <option value="Single">Single</option>  
       <option value="Double">Double</option>  
       <option value="Suite">Suite</option>  
      </select>  
    </label>  
    <button type="submit">Book Now</button>  
    {error && <p style={{ color: 'red' }}>{error}</p>}  
   </form>  
  );  
};  
  
export default BookingForm;
