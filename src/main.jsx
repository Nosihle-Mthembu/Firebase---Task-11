import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('rk_test_51QCcIRDHUd7MpwiSNVeIrgWDX0febuRiAiGHrmxO431X5hLtHe6acMeUurVWxslJrm3W85QgMxawRSMnwc7D3B1x00J0ktj0lr');

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <Elements stripe={stripePromise}>
    <Provider store={store}>
      <App />
    </Provider>
    </Elements>
  </StrictMode>,
)
