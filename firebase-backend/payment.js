// // backend/routes/payment.js
// const express = require('express');
// const router = express.Router();
// const stripe = require('stripe')('rk_test_51QCcIRDHUd7MpwiSNVeIrgWDX0febuRiAiGHrmxO431X5hLtHe6acMeUurVWxslJrm3W85QgMxawRSMnwc7D3B1x00J0ktj0lr'); // Replace with your Stripe secret key

// router.post('/create-payment-intent', async (req, res) => {
//   const { amount } = req.body; // The amount should be passed from the frontend (in cents)

//   try {
//     // Create a PaymentIntent with the specified amount
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount, // For example: 5000 = $50.00
//       currency: 'usd',
//       automatic_payment_methods: {
//         enabled: true, // Automatically enable the available payment methods
//       },
//     });

//     res.status(200).send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// });

// module.exports = router;


const express = require('express');
const app = express();
const stripe = require('stripe')('your-secret-key-here');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/create-payment-intent', async (req, res) => {
  const { paymentMethodId, email } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 5000, // Amount in cents (5000 cents = $50)
      currency: 'usd',
      payment_method: paymentMethodId,
      receipt_email: email,
      confirmation_method: 'manual',
      confirm: true,
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
