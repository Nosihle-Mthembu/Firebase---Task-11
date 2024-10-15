import React, { useState } from "react";

const SignUp = () => {
  const [role, setRole] = useState("user");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cellphone: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here with formData
    console.log(formData);
  };

  return (
    <div style={styles.container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp} style={styles.form}>
        {/* First Name */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        {/* Last Name */}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        {/* Cellphone */}
        <input
          type="text"
          name="cellphone"
          placeholder="Cellphone"
          value={formData.cellphone}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        {/* Address */}
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        <select
          style={styles.select}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        {/* Submit Button */}
        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

// Styles object
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
  },
  select: {
    margin: "10px 0",
    padding: "10px",
    fontSize: "16px",
    width: "320px",
    borderRadius: "5px",
    border: "1px solid #ccc",
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
