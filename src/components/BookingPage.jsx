// frontend/src/BookingPage.jsx
import React from 'react';
import CheckoutForm from './checkoutForm';

const BookingPage = () => {
  const bookingPrice = 200; // Set this dynamically based on the accommodation being booked

  return (
    <div>
      <h1>Complete Your Booking</h1>
      <p>Total: ${bookingPrice}</p>
      <CheckoutForm amount={bookingPrice} />
    </div>
  );
};

export default BookingPage;
