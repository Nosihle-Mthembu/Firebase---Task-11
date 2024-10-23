// src/firebase-backend/configuration.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdyMBost0Rtr1TMccnlxyZ7yuu6neRHf8",
  authDomain: "hotel-app-b3447.firebaseapp.com",
  databaseURL: "https://hotel-app-b3447-default-rtdb.firebaseio.com",
  projectId: "hotel-app-b3447",
  storageBucket: "hotel-app-b3447.appspot.com",
  messagingSenderId: "1016159397709",
  appId: "1:1016159397709:web:a0d01f91e8ffd790d5f904",
  measurementId: "G-06XS3MLCJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Initialize Firestore

export default app;

