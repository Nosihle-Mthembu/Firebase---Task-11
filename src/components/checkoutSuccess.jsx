import React, { useState } from 'react';  
import axios from 'axios';  
import StripeCheckout from 'react-stripe-checkout';  
  
const PaymentGateway = () => {  
  const [bookingId, setBookingId] = useState('');  
  const [name, setName] = useState('');  
  const [email, setEmail] = useState('');  
  const [error, setError] = useState(null);  
  
  const handlePayment = (token) => {  
   const paymentData = {  
    bookingId,  
    name,  
    email,  
    token,  
   };  
  
   axios.post('/api/payments', paymentData)  
    .then((response) => {  
      // Update booking status to "Paid"  
      axios.patch(`/api/bookings/${bookingId}`, { status: 'Paid' })  
       .then((response) => {  
        console.log('Payment successful!');  
       })  
       .catch((error) => {  
        setError(error.message);  
       });  
    })  
    .catch((error) => {  
      setError(error.message);  
    });  
  };  
  
  return (  
   <div>  
    <h1>Payment Gateway</h1>  
    <StripeCheckout  
      token={handlePayment}  
      stripeKey="YOUR_STRIPE_API_KEY"  
      name="Booking Payment"  
      description="Pay for your booking"  
      amount={1000} // amount in cents  
    />  
    {error && <p style={{ color: 'red' }}>{error}</p>}  
   </div>  
  );  
};  
  
export default PaymentGateway;
