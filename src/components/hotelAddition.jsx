import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addHotel, updateHotel } from '../features/hotelSlice';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faWifi,
    faUtensils,
    faCar,
    faDog,
    faSwimmingPool,
    faDumbbell,
    faSpa,
    faMusic,
    faChild,
    faTicketAlt,
} from '@fortawesome/free-solid-svg-icons';

const AddHotelForm = ({ hotelToEdit }) => {
    const [hotelData, setHotelData] = useState({
        name: '',
        location: '',
        description: '',
        price: '',
        imageUrl: [],
        about: '',
        policies: {
            wifi: false,
            breakfast: false,
            parking: false,
            petFriendly: false,
        },
        facilities: {
            pool: false,
            gym: false,
            spa: false,
            restaurant: false,
        },
        entertainment: {
            liveMusic: false,
            kidsClub: false,
            bar: false,
            tours: false,
        }
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

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const imageUrls = files.map(file => URL.createObjectURL(file));
        setHotelData({
            ...hotelData,
            imageUrl: imageUrls
        });
    };

    const handleCheckboxChange = (category, item) => {
        setHotelData(prevState => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                [item]: !prevState[category][item]
            }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (hotelData.imageUrl.length < 5) {
            setAlertMessage('Please upload at least 5 images.');
            return;
        }

        if (hotelToEdit) {
            dispatch(updateHotel(hotelData));
        } else {
            dispatch(addHotel(hotelData));
            setAlertMessage('Hotel added successfully!');
        }

        setHotelData({
            name: '',
            location: '',
            description: '',
            price: '',
            imageUrl: [],
            about: '',
            policies: {
                wifi: false,
                breakfast: false,
                parking: false,
                petFriendly: false,
            },
            facilities: {
                pool: false,
                gym: false,
                spa: false,
                restaurant: false,
            },
            entertainment: {
                liveMusic: false,
                kidsClub: false,
                bar: false,
                tours: false,
            }
        });

        setTimeout(() => {
            setAlertMessage('');
            navigate('/adminProfile');
        }, 3000);
    };

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
                    <div style={styles.formGroup}>
                        <label htmlFor="price">Price per Night (R)</label>
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
                        <label htmlFor="imageUrl">Upload Images (minimum 5)</label>
                        <input
                            type="file"
                            id="imageUrl"
                            name="imageUrl"
                            onChange={handleImageChange}
                            style={styles.input}
                            accept="image/*"
                            multiple
                            required
                        />
                    </div>
                </div>
                <div style={styles.column}>
                    <div style={styles.formGroup}>
                        <label>Policies</label>
                        {Object.keys(hotelData.policies).map((policy) => (
                            <div key={policy}>
                                <input
                                    type="checkbox"
                                    checked={hotelData.policies[policy]}
                                    onChange={() => handleCheckboxChange('policies', policy)}
                                />
                                <FontAwesomeIcon icon={getPolicyIcon(policy)} style={styles.icon} />
                                <label style={styles.checkboxLabel}>{policy.charAt(0).toUpperCase() + policy.slice(1)}</label>
                            </div>
                        ))}
                    </div>
                    <div style={styles.formGroup}>
                        <label>Facilities</label>
                        {Object.keys(hotelData.facilities).map((facility) => (
                            <div key={facility}>
                                <input
                                    type="checkbox"
                                    checked={hotelData.facilities[facility]}
                                    onChange={() => handleCheckboxChange('facilities', facility)}
                                />
                                <FontAwesomeIcon icon={getFacilityIcon(facility)} style={styles.icon} />
                                <label style={styles.checkboxLabel}>{facility.charAt(0).toUpperCase() + facility.slice(1)}</label>
                            </div>
                        ))}
                    </div>
                    <div style={styles.formGroup}>
                        <label>Entertainment</label>
                        {Object.keys(hotelData.entertainment).map((entertain) => (
                            <div key={entertain}>
                                <input
                                    type="checkbox"
                                    checked={hotelData.entertainment[entertain]}
                                    onChange={() => handleCheckboxChange('entertainment', entertain)}
                                />
                                <FontAwesomeIcon icon={getEntertainmentIcon(entertain)} style={styles.icon} />
                                <label style={styles.checkboxLabel}>{entertain.charAt(0).toUpperCase() + entertain.slice(1)}</label>
                            </div>
                        ))}
                    </div>
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
                </div>
                <div style={styles.fullWidth}>
                    <button type="submit" style={styles.button}>{hotelToEdit ? 'Update Hotel' : 'Add Hotel'}</button>
                </div>
            </form>
        </div>
    );
};

// Function to get the appropriate icon for policies
const getPolicyIcon = (policy) => {
    switch (policy) {
        case 'wifi':
            return faWifi;
        case 'breakfast':
            return faUtensils;
        case 'parking':
            return faCar;
        case 'petFriendly':
            return faDog;
        default:
            return null;
    }
};

// Function to get the appropriate icon for facilities
const getFacilityIcon = (facility) => {
    switch (facility) {
        case 'pool':
            return faSwimmingPool;
        case 'gym':
            return faDumbbell;
        case 'spa':
            return faSpa;
        case 'restaurant':
            return faUtensils; // Can use the same icon for restaurant
        default:
            return null;
    }
};

// Function to get the appropriate icon for entertainment
const getEntertainmentIcon = (entertain) => {
    switch (entertain) {
        case 'liveMusic':
            return faMusic;
        case 'kidsClub':
            return faChild;
        case 'bar':
            return faTicketAlt;
        case 'tours':
            return faTicketAlt; // Can use the same icon for tours
        default:
            return null;
    }
};

// Inline CSS styles
const styles = {
    container: {
        maxWidth: '900px',
        margin: '20px auto',
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
    alertStyle: {
        textAlign: 'center',
        marginBottom: '10px',
        padding: '10px',
        backgroundColor: '#d4edda',
        color: '#155724',
        borderRadius: '5px',
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
    checkboxLabel: {
        marginLeft: '5px',
    },
};

export default AddHotelForm;
