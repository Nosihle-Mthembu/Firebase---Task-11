// import express from 'express';
// import cors from 'cors';
// import Stripe from 'stripe';

// const stripe = new Stripe('sk_test_51QCcIRDHUd7MpwiSdmeRLyj3KiZtSmOvwoKiqQlmXW3Ituwck8EXxd8fFH6nmmEwgrDe6GinN20YVYWJQJ4pORVX0045zlvcS9'); // Replace with your actual Stripe secret key

// const app = express();
// app.use(cors());
// app.use(express.json());



// app.post('/createCheckoutSession', async (req, res) => {
//     const { items } = req.body;

//     try {
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ['card'],
//             line_items: items,
//             mode: 'payment',
//             success_url: 'http://localhost:3000/success',
//             cancel_url: 'http://localhost:3000/cancel',
//         });
//         res.json({ id: session.id });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// const PORT = 5173;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


// const express = require('express');
// const Stripe = require('stripe');
// const router = express.Router();

// const stripe = Stripe(process.env.sk_test_51QCcIRDHUd7MpwiSdmeRLyj3KiZtSmOvwoKiqQlmXW3Ituwck8EXxd8fFH6nmmEwgrDe6GinN20YVYWJQJ4pORVX0045zlvcS9);

// router.post('/create-checkout-session', async (req, res) => {
//   const { cartItems, userId } = req.body;

//   // Transform cart items to Stripe line items
//   const lineItems = cartItems.map((item) => ({
//     price_data: {
//       currency: 'usd',
//       product_data: {
//         name: item.name,
//       },
//       unit_amount: item.price * 100, // Convert to cents
//     },
//     quantity: item.cartQuantity,
//   }));

//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       mode: 'payment',
//       line_items: lineItems,
//       customer_email: userId, // Replace with the user's email
//       success_url: 'https://yourwebsite.com/success',
//       cancel_url: 'https://yourwebsite.com/cancel',
//     });

//     res.status(200).json({ url: session.url });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to create checkout session' });
//   }
// });

// module.exports = router;


const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Stripe = require("stripe");

// Replace with your Stripe secret key
const stripe = Stripe("sk_test_51QCcIRDHUd7MpwiSdmeRLyj3KiZtSmOvwoKiqQlmXW3Ituwck8EXxd8fFH6nmmEwgrDe6GinN20YVYWJQJ4pORVX0045zlvcS9");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;

    // Create a PaymentIntent with the amount received
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Amount is expected in cents
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).send("Failed to create payment intent");
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
