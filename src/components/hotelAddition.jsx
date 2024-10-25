import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addHotel, updateHotel } from '../features/hotelSlice'; // Adjust the import path as necessary
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AddHotelForm = ({ hotelToEdit }) => {
    const [hotelData, setHotelData] = useState({
        name: '',
        location: '',
        description: '',
        price: '',
        imageUrl: '',
        about: '',
        policies: '',
        facilities: [],
        entertainment: [],
    });
    const [alertMessage, setAlertMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (hotelToEdit) {
            setHotelData(hotelToEdit);
        }
    }, [hotelToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHotelData({
            ...hotelData,
            [name]: value
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        const updatedList = checked
            ? [...hotelData[name], value]
            : hotelData[name].filter(item => item !== value);
        
        setHotelData({
            ...hotelData,
            [name]: updatedList
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (hotelToEdit) {
            dispatch(updateHotel(hotelData));
        } else {
            dispatch(addHotel(hotelData));
            setAlertMessage('Hotel added successfully!');
            console.log('Hotel added:', hotelData);
        }
        setHotelData({
            name: '',
            location: '',
            description: '',
            price: '',
            imageUrl: '',
            about: '',
            policies: '',
            facilities: [],
            entertainment: []
        });

        setTimeout(() => {
            setAlertMessage('');
            navigate('/adminProfile');
        }, 3000);
    };

    const facilitiesOptions = [
        'Free Wi-Fi',
        'Swimming Pool',
        'Gym',
        'Spa',
        'Restaurant',
        'Bar',
        'Parking',
        'Laundry Service',
        'Airport Shuttle',
        'Conference Room',
    ];

    const entertainmentOptions = [
        'Live Music',
        'Karaoke',
        'Game Room',
        'Kids Club',
        'Outdoor Activities',
        'Movie Nights',
        'Guided Tours',
        'Cooking Classes',
        'Nightclub',
        'Themed Events',
    ];

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>{hotelToEdit ? 'Edit Hotel' : 'Add New Hotel'}</h2>
            {alertMessage && <div style={styles.alertStyle}>{alertMessage}</div>}
            <form onSubmit={handleSubmit} style={styles.form}>
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
                    <div style={styles.formGroup }>
                        <label htmlFor="price">Price</label>
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
                            type="url"
                            id="imageUrl"
                            name="imageUrl"
                            value={hotelData.imageUrl}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                </div>
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
                        <label>Facilities</label>
                        {facilitiesOptions.map((option, index) => (
                            <div key={index} style={styles.checkboxContainer}>
                                <input
                                    type="checkbox"
                                    id={option}
                                    name="facilities"
                                    value={option}
                                    checked={hotelData.facilities.includes(option)}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor={option}>{option}</label>
                            </div>
                        ))}
                    </div>
                    <div style={styles.formGroup}>
                        <label>Fun & Entertainment</label>
                        {entertainmentOptions.map((option, index) => (
                            <div key={index} style={styles.checkboxContainer}>
                                <input
                                    type="checkbox"
                                    id={option}
                                    name="entertainment"
                                    value={option}
                                    checked={hotelData.entertainment.includes(option)}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor={option}>{option}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <button type="submit" style={styles.submitButton}>
                    {hotelToEdit ? 'Update Hotel' : 'Add Hotel'}
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '800px',
        margin: '40px auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px'
    },
    alertStyle: {
        backgroundColor: '#dff0df',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '20px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        marginRight: '20px'
    },
    formGroup: {
        marginBottom: '20px'
    },
    input: {
        width: '100%',
        height: '40px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    },
    textarea: {
        width: '100%',
        height: '100px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    },
    checkboxContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
    },
    submitButton: {
        width: '100%',
        height: '40px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#4CAF50',
        color: '#fff',
        cursor: 'pointer'
    }
};

export default AddHotelForm;