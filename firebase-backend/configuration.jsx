import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyCdyMBost0Rtr1TMccnlxyZ7yuu6neRHf8",
  authDomain: "hotel-app-b3447.firebaseapp.com",
  projectId: "hotel-app-b3447",
  storageBucket: "hotel-app-b3447.appspot.com",
  messagingSenderId: "1016159397709",
  appId: "1:1016159397709:web:a0d01f91e8ffd790d5f904",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
const testSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, "testuser@example.com", "password123");
      console.log("User signed up:", userCredential.user);
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };
  
  testSignUp();



