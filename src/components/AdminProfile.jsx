import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteHotel } from '../features/hotelSlice';
import { IoAddCircleOutline } from "react-icons/io5";

const AdminPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hotels = useSelector((state) => state.hotels.list);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      navigate('/');
    }
  };

  const handleEdit = (hotelId) => {
    // Navigate to the edit form for the selected hotel
    navigate(`/update-hotel/${hotelId}`);
  };

  const handleAccommodationView = () => {
    navigate('/accommodationView');
  };

  const handleDeleteHotel = (hotelId) => {
    dispatch(deleteHotel(hotelId));
  };

  const handleHotelForm = () => {
    navigate('/Form/:hotelId'); 
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Admin Profile</h2>
        <div style={styles.profileCard}>
          <img src="admin-avatar-url" alt="Admin Avatar" style={styles.avatar} />
          <h3>Admin Name</h3>
          <p>Email: admin@example.com</p>
          <p>Role: Administrator</p>
          <button style={styles.updateButton}>Update Profile</button>
        </div>
      </div>
      <div style={styles.content}>
        <div style={styles.header}>
          <h2 style={styles.headerTitle}>Accommodation Listings</h2>
          <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
          
        </div>
        <div style={styles.accommodationCards}>
          {hotels.length === 0 ? (
            <p>No accommodations listed yet.</p>
          ) : (
            hotels.map((hotel) => (
              <div key={`${hotel.id}-${hotel.name}`} style={styles.accommodationCard}>
                <img
                  src={hotel.imageUrl}
                  alt={hotel.name}
                  style={styles.accommodationImage}
                  onClick={handleAccommodationView}
                />
                <h3>{hotel.name}</h3>
                <p>Location: {hotel.location}</p>
                <p>Price: R{hotel.price}/night</p>

                {/* Edit/Delete functionality */}
                <div style={styles.actions}>
                  <button onClick={() => handleEdit(hotel.id)} style={styles.editButton}>Edit</button>
                  <button
                    style={styles.deleteButton}
                    onClick={() => handleDeleteHotel(hotel.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

          <IoAddCircleOutline style={{ cursor: 'pointer', fontSize: '24px', position: 'absolute', bottom: '50px', right: '50px', width:"10%", height:"10%" }}
          onClick={handleHotelForm}/>
        
      </div>
    </div>
  );
};

// Inline CSS styles (existing styles)
const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  sidebar: {
    flex: '0 0 25%',
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
    flex: '0 0 75%',
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
  actions: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  editButton: {
    padding: '8px 12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    padding: '8px 12px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  updateButton: {
    padding: '8px 12px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default AdminPage;
