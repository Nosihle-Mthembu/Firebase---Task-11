import React from 'react';
import { useSelector } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './checkoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user); // Ensure the correct path to the user data

  // If user data is not available yet, show a loading state or default content
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.ProfileContainer}>
        <div className="flex flex-col items-center" style={{ padding: "10%" }}>
          <div className="relative">
            <img
              src={user.imageUrl || 'https://placehold.co/100x100'} // Default image if not provided
              alt={`Profile of ${user.name}`}
              className="rounded-full border-4 border-white"
              style={{ borderRadius: "100%" }}
            />
            <div className="absolute bottom-0 right-0">
              <button style={styles.gradientBg}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="text-center mt-4">
            <h1 className="text-lg font-bold">{user.name}</h1>
            <p className="text-gray-500">{user.role || 'User Role'}</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <ul className="space-y-4">
            <li className="text-black">{user.email || 'Email not provided'}</li>
            <li className="text-gray-400">{user.phone || 'Phone not provided'}</li>
            <li className="text-gray-400">{user.address || 'Address not provided'}</li>
          </ul>
        </div>
        <div className="flex space-x-4 mt-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg">
            <i className="fas fa-edit"></i> Edit
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-full shadow-lg">
            <i className="fas fa-trash"></i> Delete
          </button>
        </div>
      </div>

      <Elements stripe={stripePromise}>
      <div className="App">
        <h1>Stripe Payment</h1>
        <CheckoutForm />
      </div>
    </Elements>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  ProfileContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'grey',
  },
  gradientBg: {
    background: 'linear-gradient(to right, #ec4899, #f59e0b)',
    color: 'white',
    borderRadius: '9999px',
    padding: '0.5rem',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.25)',
  },
};

export default UserProfile;
