// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addHotel, editHotel } from '../features/hotelSlice'; // Ensure you have an editHotel action
// import { useNavigate, useParams } from 'react-router-dom';

// const HotelForm = ({ existingHotel }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { hotelId } = useParams();

//   const [hotelData, setHotelData] = useState({
//     name: '',
//     location: '',
//     description: '',
//     price: '',
//     imageUrl: '',
//     about: '',
//     policies: '',
//     facilities: '',
//     entertainment: ''
//   });

//   const [alertMessage, setAlertMessage] = useState('');

//   // If existingHotel is provided, set the hotelData with existing values
//   useEffect(() => {
//     if (existingHotel) {
//       setHotelData(existingHotel);
//     }
//   }, [existingHotel]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setHotelData({
//       ...hotelData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Use editHotel if hotelId exists, otherwise addHotel
//     if (hotelId) {
//       dispatch(editHotel({ id: hotelId, data: hotelData })); // Call the edit action
//       setAlertMessage('Hotel updated successfully!');
//     } else {
//       dispatch(addHotel(hotelData)); // Call the add action
//       setAlertMessage('Hotel added successfully!');
//     }

//     // Reset the form fields after submission
//     setHotelData({
//       name: '',
//       location: '',
//       description: '',
//       price: '',
//       imageUrl: '',
//       about: '',
//       policies: '',
//       facilities: '',
//       entertainment: '',
//     });

//     // Clear the alert message after 3 seconds and navigate to the AdminProfile
//     setTimeout(() => {
//       setAlertMessage('');
//       navigate('/adminProfile'); // Navigate to the AdminProfile page
//     }, 3000);
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>{hotelId ? 'Edit Hotel' : 'Add New Hotel'}</h2>
//       {alertMessage && <div style={styles.alertStyle}>{alertMessage}</div>}
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.column}>
//           <div style={styles.formGroup}>
//             <label htmlFor="name">Hotel Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={hotelData.name}
//               onChange={handleChange}
//               style={styles.input}
//               required
//             />
//           </div>
//           {/* Repeat for other input fields */}
//         </div>
//         <div style={styles.fullWidth}>
//           <button type="submit" style={styles.button}>{hotelId ? 'Update Hotel' : 'Add Hotel'}</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// const styles = {
//     container: {
//       maxWidth: '900px',
//       margin: '20px auto', // Added margin for spacing above and below the form
//       padding: '20px',
//       border: '1px solid #ccc',
//       borderRadius: '10px',
//       backgroundColor: '#f9f9f9',
//     },
//     title: {
//       textAlign: 'center',
//       marginBottom: '20px',
//       color: '#333',
//     },
//     alertStyle: {
//       textAlign: 'center',
//       marginBottom: '10px',
//       padding: '10px',
//       backgroundColor: '#d4edda',
//       color: '#155724',
//       borderRadius: '5px',
//     },
//     form: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-between',
//     },
//     column: {
//       flex: '0 0 48%',
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     formGroup: {
//       marginBottom: '15px',
//     },
//     input: {
//       width: '100%',
//       padding: '10px',
//       borderRadius: '5px',
//       border: '1px solid #ccc',
//     },
//     textarea: {
//       width: '100%',
//       padding: '10px',
//       borderRadius: '5px',
//       border: '1px solid #ccc',
//       minHeight: '80px',
//     },
//     button: {
//       width: '100%',
//       padding: '10px',
//       backgroundColor: '#28a745',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       fontSize: '16px',
//     },
//     fullWidth: {
//       flex: '0 0 100%',
//       marginTop: '20px',
//     },
//   };

// export default HotelForm;
