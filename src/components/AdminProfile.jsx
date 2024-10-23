import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteHotel, updateHotel } from '../features/hotelSlice';
import { useState } from 'react';
import { IoAddCircleOutline, IoClose } from "react-icons/io5";
import { MdOpacity } from 'react-icons/md';
import { FiCamera } from 'react-icons/fi'; // New icon for image upload

const AdminPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hotels = useSelector((state) => state.hotels.list);

  const [editingHotelId, setEditingHotelId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    price: '',
    imageUrl: ''
  });
  const [adminDetails, setAdminDetails] = useState({
    name: 'Nora Tsunoda',
    position: 'Security Lead'
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [adminImage, setAdminImage] = useState("https://placehold.co/100x100");
  const [isEditingAdmin, setIsEditingAdmin] = useState(false);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      navigate('/');
    }
  };

  const handleEdit = (hotel) => {
    setEditingHotelId(hotel.id);
    setFormData({
      name: hotel.name,
      location: hotel.location,
      price: hotel.price,
      imageUrl: hotel.imageUrl
    });
  };

  const handleSave = (hotelId) => {
    dispatch(updateHotel({ id: hotelId, ...formData }));
    setEditingHotelId(null);
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAdminInputChange = (e) => {
    setAdminDetails({
      ...adminDetails,
      [e.target.name]: e.target.value
    });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAdminImage(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleUpdateAdmin = () => {
    setIsEditingAdmin(false);
    // Logic to update the admin details
    console.log('Admin details updated:', adminDetails);
  };

  const handleDeleteAdmin = () => {
    if (window.confirm('Are you sure you want to delete your account? This action is irreversible.')) {
      // Logic to delete the admin account
      console.log('Admin account deleted');
      navigate('/');
    }
  };

  return (
    <div style={styles.container}>
      <div style={{ ...styles.sidebar, display: isSidebarOpen ? 'block' : 'none' }}>
        <button style={styles.closeButton} onClick={toggleSidebar}>
          <IoClose />
        </button>
        <div style={styles.ProfileContainer}>
          <div className="flex flex-col items-center" style={{ padding: "10%" }}>
            <div className="relative">
              <img
                src={adminImage}
                alt="Profile of the admin"
                className="rounded-full border-4 border-white"
                style={{ borderRadius: "100%", width: '150px', height: '150px', cursor: 'pointer' }}
                onClick={() => document.getElementById('image-upload').click()} // Trigger file input click
              />
              <FiCamera style={styles.cameraIcon} /> {/* Camera icon for image upload */}
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleImageUpload}
                style={styles.imageUpload}
              />
            </div>
            <div className="text-center mt-4">
              {isEditingAdmin ? (
                <>
                  <input
                    type="text"
                    name="name"
                    value={adminDetails.name}
                    onChange={handleAdminInputChange}
                    placeholder="Name"
                    style={styles.input}
                  />
                  <input
                    type="text"
                    name="position"
                    value={adminDetails.position}
                    onChange={handleAdminInputChange}
                    placeholder="Position"
                    style={styles.input}
                  />
                </>
              ) : (
                <>
                  <h2 className="text-lg font-bold">{adminDetails.name}</h2>
                  <p className="text-gray-500">{adminDetails.position}</p>
                </>
              )}
            </div>
            <div style={styles.actions}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg" onClick={handleUpdateAdmin}>
                Update
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-full shadow-lg" onClick={handleDeleteAdmin}>
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ ...styles.content, marginLeft: isSidebarOpen ? '250px' : '0' }}>
        <div style={styles.header}>
          {!isSidebarOpen && (
            <img
              src={adminImage}
              alt="Profile of the admin"
              onClick={toggleSidebar}
              style={{ cursor: 'pointer', width: '40px', height: '40px', borderRadius: '50%' }}
            />
          )}
          <h2 style={styles.headerTitle}>Accommodation Listings</h2>
          <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
        </div>
        <div style={styles.accommodationCards}>
          {hotels.length === 0 ? (
            <p>No accommodations listed yet.</p>
          ) : (
            hotels.map((hotel) => (
              <div key={`${hotel.id}-${hotel.name}`} style={styles.accommodationCard}>
                {editingHotelId === hotel.id ? (
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Hotel Name"
                      style={styles.input}
                    />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Location"
                      style={styles.input}
                    />
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="Price per Night"
                      style={styles.input}
                    />
                    <input
                      type="text"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleInputChange}
                      placeholder="Image URL"
                      style={styles.input}
                    />
                    <div style={styles.actions}>
                      <button onClick={() => handleSave(hotel.id)} style={styles.saveButton}>Save</button>
                      <button onClick={() => setEditingHotelId(null)} style={styles.cancelButton}>Cancel</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <img
                      src={hotel.imageUrl}
                      alt={hotel.name}
                      style={styles.accommodationImage}
                      onClick={handleAccommodationView}
                    />
                    <h3>{hotel.name}</h3>
                    <p>Location: {hotel.location}</p>
                    <p>Price: R{hotel.price}/night</p>
                    <div style={styles.actions}>
                      <button onClick={() => handleEdit(hotel)} style={styles.editButton}>Edit</button>
                      <button
                        style={styles.deleteButton}
                        onClick={() => handleDeleteHotel(hotel.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>

        <IoAddCircleOutline
          style={styles.addIcon}
          onClick={handleHotelForm}
        />
      </div>
    </div>
  );
};

// Styling for the camera icon and other parts of the layout
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    height: '100vh'
  },
  content: {
    flexGrow: 1,
    padding: '20px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  headerTitle: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  sidebar: {
    width: '250px',
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#f8f8f8',
    padding: '20px',
    overflowY: 'auto'
  },
  closeButton: {
    fontSize: '24px',
    color: '#333',
    cursor: 'pointer',
    marginBottom: '20px'
  },
  logoutButton: {
    padding: '10px 20px',
    backgroundColor: '#d9534f',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  accommodationCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px'
  },
  accommodationCard: {
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.4s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  },
  cameraIcon: {
    position: 'absolute',
    // bottom: 0,
    right: 0,
    fontSize: '24px',
    color: '#fff',
    backgroundColor: '#007bff',
    borderRadius: '50%',
    padding: '8px',
    cursor: 'pointer'
  },
  imageUpload: {
    display: 'none'
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px'
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px'
  },
  saveButton: {
    backgroundColor: '#5cb85c',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  cancelButton: {
    backgroundColor: '#f0ad4e',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  deleteButton: {
    backgroundColor: '#d9534f',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  addIcon: {
    fontSize: '36px',
    color: '#007bff',
    cursor: 'pointer',
    position: 'absolute',
    bottom: '20px',
    right: '20px'
  }
};

export default AdminPage;
