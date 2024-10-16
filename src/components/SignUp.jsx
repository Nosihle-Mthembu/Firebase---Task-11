import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth"; // Import Firebase Auth methods
import { auth } from "../../firebase-backend/configuration"; // Import the 'auth' from your firebase.js

const SignUp = () => {
  // Initial state for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cellphone: "",
    address: "",
    password: "",
  });

  // States for error and success messages
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handling input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission (Sign Up logic)
  const handleSignUp = (e) => {
    e.preventDefault();
    const { email, password, firstName, lastName, cellphone, address } = formData;

    // Firebase sign up using email and password
    createUserWithEmailAndPassword(auth, email, password,firstName, lastName, cellphone, address)
      .then((userCredential) => {
        setSuccess("User created successfully!");
        console.log("User created:", userCredential.user);
        // Here, you can also store additional user data (firstName, lastName, etc.) in Firestore
      })
      .catch((error) => {
        setError(error.message);
        console.log("Error:", error);
      });
  };

  return (
    <div style={styles.container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp} style={styles.form}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="cellphone"
          placeholder="Cellphone"
          value={formData.cellphone}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        {/* Submit Button */}
        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>

      {/* Display error or success messages */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

// Styles object
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  input: {
    margin: "10px 0",
    padding: "10px",
    fontSize: "16px",
    width: "300px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default SignUp;
