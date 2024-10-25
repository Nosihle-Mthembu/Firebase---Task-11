// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { deleteHotel, updateHotel } from '../features/hotelSlice';
// import { useState } from 'react';
// import { IoAddCircleOutline, IoClose } from "react-icons/io5";
// import { FiCamera } from 'react-icons/fi'; // New icon for image upload

// const AdminPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const hotels = useSelector((state) => state.hotels.list);

//   const [editingHotelId, setEditingHotelId] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     location: '',
//     price: '',
//     imageUrl: ''
//   });
//   const [adminDetails, setAdminDetails] = useState({
//     name: "Jane Doe",
//     position: 'Admin'
//   });
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [adminImage, setAdminImage] = useState("https://placehold.co/100x100");
//   const [isEditingAdmin, setIsEditingAdmin] = useState(false);

//   const handleLogout = () => {
//     if (window.confirm('Are you sure you want to logout?')) {
//       navigate('/');
//     }
//   };

//   const handleEdit = (hotel) => {
//     setEditingHotelId(hotel.id);
//     setFormData({
//       name: hotel.name,
//       location: hotel.location,
//       price: hotel.price,
//       imageUrl: hotel.imageUrl
//     });
//   };

//   const handleSave = (hotelId) => {
//     dispatch(updateHotel({ id: hotelId, ...formData }));
//     setEditingHotelId(null);
//   };

//   const handleAccommodationView = () => {
//     navigate('/accommodationView');
//   };

//   const handleDeleteHotel = (hotelId) => {
//     dispatch(deleteHotel(hotelId));
//   };

//   const handleHotelForm = () => {
//     navigate('/Form');
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleAdminInputChange = (e) => {
//     setAdminDetails({
//       ...adminDetails,
//       [e.target.name]: e.target.value
//     });
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleImageUpload = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setAdminImage(event.target.result);
//       };
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };

//   const handleUpdateAdmin = () => {
//     setIsEditingAdmin(false);
//     console.log('Admin details updated:', adminDetails);
//   };

//   const handleDeleteAdmin = () => {
//     if (window.confirm('Are you sure you want to delete your account? This action is irreversible.')) {
//       console.log('Admin account deleted');
//       navigate('/');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={{ ...styles.sidebar, display: isSidebarOpen ? 'block' : 'none' }}>
//         <button style={styles.closeButton} onClick={toggleSidebar}>
//           <IoClose />
//         </button>
//         <div style={styles.ProfileContainer}>
//           <div className="flex flex-col items-center" style={{ padding: "10%" }}>
//             <div className="relative">
//               <img
//                 src={adminImage}
//                 alt="Profile of the admin"
//                 className="rounded-full border-4 border-white"
//                 style={{ borderRadius: "100%", width: '150px', height: '150px', cursor: 'pointer' }}
//                 onClick={() => document.getElementById('image-upload').click()}
//               />
//               <FiCamera style={styles.cameraIcon} />
//               <input
//                 type="file"
//                 id="image-upload"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 style={styles.imageUpload}
//               />
//             </div>
//             <div className="text-center mt-4">
//               {isEditingAdmin ? (
//                 <>
//                   <input
//                     type="text"
//                     name="name"
//                     value={adminDetails.firstname}
//                     onChange={handleAdminInputChange}
//                     placeholder="Name"
//                     style={styles.input}
//                   />
//                   <input
//                     type="text"
//                     name="position"
//                     value={adminDetails.userType}
//                     onChange={handleAdminInputChange}
//                     placeholder="Position"
//                     style={styles.input}
//                   />
//                 </>
//               ) : (
//                 <>
//                   <h2 className="text-lg font-bold">{adminDetails.name}</h2>
//                   <p className="text-gray-500">{adminDetails.position}</p>
//                 </>
//               )}
//             </div>
//             <div style={styles.actions}>
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg" onClick={handleUpdateAdmin}>
//                 Update
//               </button>
//               <button className="bg-red-500 text-white px-4 py-2 rounded-full shadow-lg" onClick={handleDeleteAdmin}>
//                 Delete Account
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div style={{ ...styles.content, marginLeft: isSidebarOpen ? '250px' : '0' }}>
//         <div style={styles.header}>
//           {!isSidebarOpen && (
//             <img
//               src={adminImage}
//               alt="Profile of the admin"
//               onClick={toggleSidebar}
//               style={{ cursor: 'pointer', width: '40px', height: '40px', borderRadius: '50%' }}
//             />
//           )}
//           <h2 style={styles.headerTitle}>Accommodation Listings</h2>
//           <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
//         </div>
//         <div style={styles.accommodationCards}>
//           {hotels.length === 0 ? (
//             <p>No accommodations listed yet.</p>
//           ) : (
//             hotels.map((hotel) => (
//               <div key={`${hotel.id}-${hotel.name}`} style={styles.accommodationCard}>
//                 {editingHotelId === hotel.id ? (
//                   <div>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       placeholder="Hotel Name"
//                       style={styles.input}
//                     />
//                     <input
//                       type="text"
//                       name="location"
//                       value={formData.location}
//                       onChange={handleInputChange}
//                       placeholder="Location"
//                       style={styles.input}
//                     />
//                     <input
//                       type="number"
//                       name="price"
//                       value={formData.price}
//                       onChange={handleInputChange}
//                       placeholder="Price per Night"
//                       style={styles.input}
//                     />
//                     <input
//                       type="text"
//                       name="imageUrl"
//                       value={formData.imageUrl}
//                       onChange={handleInputChange}
//                       placeholder="Image URL"
//                       style={styles.input}
//                     />
//                     <div style={styles.actions}>
//                       <button onClick={() => handleSave(hotel.id)} style={styles.saveButton}>Save</button>
//                       <button onClick={() => setEditingHotelId(null)} style={styles.cancelButton}>Cancel</button>
//                     </div>
//                   </div>
//                 ) : (
//                   <>
//                     <img
//                       src={hotel.imageUrl}
//                       alt={hotel.name}
//                       style={styles.accommodationImage}
//                       onClick={handleAccommodationView}
//                     />
//                     <h3>{hotel.name}</h3>
//                     <p>Location: {hotel.location}</p>
//                     <p>Price: R{hotel.price}/night</p>
//                     <div style={styles.actions}>
//                       <button onClick={() => handleEdit(hotel)} style={styles.editButton}>Edit</button>
//                       <button
//                         style={styles.deleteButton}
//                         onClick={() => handleDeleteHotel(hotel.id)}
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </div>
//             ))
//           )}
//         </div>

//         <IoAddCircleOutline
//           style={styles.addIcon}
//           onClick={handleHotelForm}
//         />
//       </div>
//     </div>
//   );
// };

// // Styling for the camera icon and other parts of the layout
// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'row',
//     width: '100vw',
//     height: '100vh'
//   },
//   content: {
//     flexGrow: 1,
//     padding: '20px',
//     transition: 'margin-left 0.3s', // Smooth transition for content margin
//   },
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '20px'
//   },
//   headerTitle: {
//     fontSize: '24px',
//     fontWeight: 'bold'
//   },
//   sidebar: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '250px',
//     height: '100%',
//     backgroundColor: '#fff',
//     borderRight: '1px solid #ccc',
//     zIndex: 1000,
//     transition: 'transform 0.3s ease-in-out',
//     boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
//   },
//   closeButton: {
//     fontSize: '24px',
//     background: 'none',
//     border: 'none',
//     cursor: 'pointer',
//     position: 'absolute',
//     top: '10px',
//     right: '10px'
//   },
//   accommodationCards: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
//     gap: '20px'
//   },
//   accommodationCard: {
//     padding: '20px',
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//     textAlign: 'center'
//   },
//   accommodationImage: {
//     width: '100%',
//     height: 'auto',
//     borderRadius: '8px',
//     cursor: 'pointer'
//   },
//   actions: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: '10px'
//   },
//   saveButton: {
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     padding: '10px 15px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer'
//   },
//   cancelButton: {
//     backgroundColor: '#f44336',
//     color: 'white',
//     padding: '10px 15px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer'
//   },
//   editButton: {
//     backgroundColor: '#2196F3',
//     color: 'white',
//     padding: '10px 15px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer'
//   },
//   deleteButton: {
//     backgroundColor: '#f44336',
//     color: 'white',
//     padding: '10px 15px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer'
//   },
//   logoutButton: {
//     backgroundColor: '#f44336',
//     color: 'white',
//     padding: '10px 15px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer'
//   },
//   addIcon: {
//     position: 'fixed',
//     bottom: '20px',
//     right: '20px',
//     fontSize: '40px',
//     color: '#4CAF50',
//     cursor: 'pointer'
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     margin: '5px 0',
//     border: '1px solid #ccc',
//     borderRadius: '4px'
//   },
//   imageUpload: {
//     display: 'none'
//   },
//   ProfileContainer: {
//     margin: '20px'
//   },
//   cameraIcon: {
//     position: 'absolute',
//     bottom: '5px',
//     right: '5px',
//     color: 'white',
//     cursor: 'pointer',
//     fontSize: '24px'
//   }
// };

// export default AdminPage;


import { useSelector, useDispatch } from 'react-redux';  
import { useNavigate } from 'react-router-dom';  
import { deleteHotel, updateHotel } from '../features/hotelSlice';  
import { useState } from 'react';  
import { IoAddCircleOutline, IoClose } from "react-icons/io5";  
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
   name: "Jane Doe",  
   position: 'Admin'  
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
  
  const handleAccommodationView = (hotelId) => {  
   navigate(`/accommodationView/${hotelId}`);  
  };  
  
  const handleDeleteHotel = (hotelId) => {  
   dispatch(deleteHotel(hotelId));  
  };  
  
  const handleHotelForm = () => {  
   navigate('/Form');  
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
   console.log('Admin details updated:', adminDetails);  
  };  
  
  const handleDeleteAdmin = () => {  
   if (window.confirm('Are you sure you want to delete your account? This action is irreversible.')) {  
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
           onClick={() => document.getElementById('image-upload').click()}  
          />  
          <FiCamera style={styles.cameraIcon} />  
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
              value={adminDetails.firstname}  
              onChange={handleAdminInputChange}  
              placeholder="Name"  
              style={styles.input}  
            />  
            <input  
              type="text"  
              name="position"  
              value={adminDetails.userType}  
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
               onClick={() => handleAccommodationView(hotel.id)}  
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
   padding: '20px',  
   transition: 'margin-left 0.3s', // Smooth transition for content margin  
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
   position: 'fixed',  
   top: 0,  
   left: 0,  
   width: '250px',  
   height: '100%',  
   backgroundColor: '#fff',  
   borderRight: '1px solid #ccc',  
   zIndex: 1000,  
   transition: 'transform 0.3s ease-in-out',  
   boxShadow: '2px 0 5px rgba(0,0,0,0.1)'  
  },  
  closeButton: {  
   fontSize: '24px',  
   background: 'none',  
   border: 'none',  
   cursor: 'pointer',  
   position: 'absolute',  
   top: '10px',  
   right: '10px'  
  },  
  accommodationCards: {  
   display: 'grid',  
   gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',  
   gap: '20px'  
  },  
  accommodationCard: {  
   padding: '20px',  
   border: '1px solid #ddd',  
   borderRadius: '8px',  
   boxShadow: '0 2px 8px rgba(0,0,0,0.1)',  
   textAlign: 'center'  
  },  
  accommodationImage: {  
   width: '100%',  
   height: 'auto',  
   borderRadius: '8px',  
   cursor: 'pointer'  
  },  
  actions: {  
   display: 'flex',  
   justifyContent: 'space-between',  
   marginTop: '10px'  
  },  
  saveButton: {  
   backgroundColor: '#4CAF50',  
   color: 'white',  
   padding: '10px 15px',  
   border: 'none',  
   borderRadius: '5px',  
   cursor: 'pointer'  
  },  
  cancelButton: {  
   backgroundColor: '#f44336',  
   color: 'white',  
   padding: '10px 15px',  
   border: 'none',  
   borderRadius: '5px',  
   cursor: 'pointer'  
  },  
  editButton: {  
   backgroundColor: '#2196F3',  
   color: 'white',  
   padding: '10px 15px',  
   border: 'none',  
   borderRadius: '5px',  
   cursor: 'pointer'  
  },  
  deleteButton: {  
   backgroundColor: '#f44336',  
   color: 'white',  
   padding: '10px 15px',  
   border: 'none',  
   borderRadius: '5px',  
   cursor: 'pointer'  
  },  
  logoutButton: {  
   backgroundColor: '#f44336',  
   color: 'white',  
   padding: '10px 15px',  
   border: 'none',  
   borderRadius: '5px',  
   cursor: 'pointer'  
  },  
  addIcon: {  
   position: 'fixed',  
   bottom: '20px',  
   right: '20px',  
   fontSize: '40px',  
   color: '#4CAF50',  
   cursor: 'pointer'  
  },  
  input: {  
   width: '100%',  
   padding: '10px',  
   margin: '5px 0',  
   border: '1px solid #ccc',  
   borderRadius: '4px'  
  },  
  imageUpload: {  
   display: 'none'  
  },  
  ProfileContainer: {  
   margin: '20px'  
  },  
  cameraIcon: {  
   position: 'absolute',  
   bottom: '5px',  
   right: '5px',  
   color: 'white',  
   cursor: 'pointer',  
   fontSize: '24px'  
  }  
};  
  
export default AdminPage;
