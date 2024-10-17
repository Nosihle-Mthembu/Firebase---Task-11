import React, { useState } from 'react';

const AddHotelForm = () => {
  const [hotelData, setHotelData] = useState({
    name: '',
    location: '',
    description: '',
    price: '',
    imageUrl: '',
    about: '',
    policies: '',
    facilities: '',
    entertainment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotelData({
      ...hotelData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hotel Data:', hotelData);
    setHotelData({
      name: '',
      location: '',
      description: '',
      price: '',
      imageUrl: '',
      about: '',
      policies: '',
      facilities: '',
      entertainment: ''
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Add New Hotel</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* First column */}
        <div style={styles.column}>
          <div style={styles.formGroup}>
            <label htmlFor="name">Hotel Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={hotelData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={hotelData.location}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={hotelData.description}
              onChange={handleChange}
              style={styles.textarea}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="price">Price per Night ($)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={hotelData.price}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={hotelData.imageUrl}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
        </div>

        {/* Second column */}
        <div style={styles.column}>
          <div style={styles.formGroup}>
            <label htmlFor="about">About</label>
            <textarea
              id="about"
              name="about"
              value={hotelData.about}
              onChange={handleChange}
              style={styles.textarea}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="policies">Policies</label>
            <textarea
              id="policies"
              name="policies"
              value={hotelData.policies}
              onChange={handleChange}
              style={styles.textarea}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="facilities">Facilities</label>
            <textarea
              id="facilities"
              name="facilities"
              value={hotelData.facilities}
              onChange={handleChange}
              style={styles.textarea}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="entertainment">Fun & Entertainment</label>
            <textarea
              id="entertainment"
              name="entertainment"
              value={hotelData.entertainment}
              onChange={handleChange}
              style={styles.textarea}
              required
            />
          </div>
        </div>

        <div style={styles.fullWidth}>
          <button type="submit" style={styles.button}>Add Hotel</button>
        </div>
      </form>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    maxWidth: '900px',
    margin: '20px auto', // Added margin for spacing above and below the form
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  column: {
    flex: '0 0 48%',
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '80px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  fullWidth: {
    flex: '0 0 100%',
    marginTop: '20px',
  },
};

export default AddHotelForm;
