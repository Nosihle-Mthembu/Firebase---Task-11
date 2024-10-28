import React, { useState, useEffect } from 'react';  
import axios from 'axios';  
  
const BookingDashboard = () => {  
  const [bookings, setBookings] = useState([]);  
  const [error, setError] = useState(null);  
  
  useEffect(() => {  
   axios.get('/api/bookings')  
    .then((response) => {  
      setBookings(response.data);  
    })  
    .catch((error) => {  
      setError(error.message);  
    });  
  }, []);  
  
  const handleBookingClick = (booking) => {  
   // Call API to fetch booking details  
   axios.get(`/api/bookings/${booking.id}`)  
    .then((response) => {  
      const bookingDetails = response.data;  
      // Display booking details  
      console.log(bookingDetails);  
    })  
    .catch((error) => {  
      setError(error.message);  
    });  
  };  
  
  return (  
   <div>  
    <h1>Booking Dashboard</h1>  
    <table>  
      <thead>  
       <tr>  
        <th>User Name</th>  
        <th>Check-in Date</th>  
        <th>Check-out Date</th>  
        <th>Room Type</th>  
        <th>Booking Status</th>  
       </tr>  
      </thead>  
      <tbody>  
       {bookings.map((booking) => (  
        <tr key={booking.id}>  
          <td>{booking.name}</td>  
          <td>{booking.checkInDate}</td>  
          <td>{booking.checkOutDate}</td>  
          <td>{booking.roomType}</td>  
          <td>{booking.status}</td>  
          <td>  
           <button onClick={() => handleBookingClick(booking)}>View Details</button>  
          </td>  
        </tr>  
       ))}  
      </tbody>  
    </table>  
    {error && <p style={{ color: 'red' }}>{error}</p>}  
   </div>  
  );  
};  
  
export default BookingDashboard;
