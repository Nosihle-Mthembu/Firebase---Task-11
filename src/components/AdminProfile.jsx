// AdminPage.js
import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state

const AdminPage = () => {
  const hotels = useSelector((state) => state.hotels.list); // Get the list of hotels from the Redux store

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Admin Profile</h2>
        {/* Admin Profile Details */}
        <div style={styles.profileCard}>
          <img src="admin-avatar-url" alt="Admin Avatar" style={styles.avatar} />
          <h3>Admin Name</h3>
          <p>Email: admin@example.com</p>
          <p>Role: Administrator</p>
        </div>
      </div>
      <div style={styles.content}>
        <div style={styles.header}>
          <h2 style={styles.headerTitle}>Accommodation Listings</h2>
          <button style={styles.logoutButton}>Logout</button>
        </div>
        <div style={styles.accommodationCards}>
          {hotels.map((hotel, index) => ( // Map through the hotels to display them
            <div key={index} style={styles.accommodationCard}>
              <img src={hotel.imageUrl} alt={hotel.name} style={styles.accommodationImage} />
              <h3>{hotel.name}</h3>
              <p>Location: {hotel.location}</p>
              <p>Price: ${hotel.price}/night</p>
              <button style={styles.viewButton}>View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  sidebar: {
    flex: '0 0 25%', // Sidebar takes 25% of the width
    backgroundColor: '#f2f2f2',
    padding: '20px',
    borderRight: '1px solid #ccc',
  },
  sidebarTitle: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  profileCard: {
    textAlign: 'center',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#fff',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  content: {
    flex: '0 0 75%', // Content takes 75% of the width
    padding: '20px',
    position: 'relative',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  headerTitle: {
    margin: 0,
  },
  logoutButton: {
    padding: '10px 15px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  accommodationCards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  accommodationCard: {
    width: '30%',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    backgroundColor: '#fff',
  },
  accommodationImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '5px',
  },
  viewButton: {
    marginTop: '10px',
    padding: '8px 12px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AdminPage;
