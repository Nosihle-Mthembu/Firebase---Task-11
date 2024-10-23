import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateHotel } from '../features/hotelSlice'; // Adjust the import path as necessary

const UpdateHotelForm = () => {
    const { hotelId } = useParams(); // Get the hotel ID from the URL
    const [hotelData, setHotelData] = useState({
        name: '',
        location: '',
        price: '',
        imageUrl: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the hotel data by hotelId (you might replace this with your actual fetch logic)
        const fetchHotelData = async () => {
            try {
                const response = await fetch(`/api/hotels/${hotelId}`);
                const data = await response.json();
                setHotelData(data); // Set the fetched hotel data
            } catch (error) {
                console.error('Failed to fetch hotel data:', error);
            }
        };
        fetchHotelData();
    }, [hotelId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHotelData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateHotel({ id: hotelId, ...hotelData })); // Update hotel in the Redux store
        navigate('/adminProfile'); // Navigate back to the admin page after updating
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update Hotel</h2>
            <label>
                Name:
                <input type="text" name="name" value={hotelData.name} onChange={handleChange} required />
            </label>
            <label>
                Location:
                <input type="text" name="location" value={hotelData.location} onChange={handleChange} required />
            </label>
            <label>
                Price:
                <input type="number" name="price" value={hotelData.price} onChange={handleChange} required />
            </label>
            <label>
                Image URL:
                <input type="text" name="imageUrl" value={hotelData.imageUrl} onChange={handleChange} required />
            </label>
            <button type="submit">Update Hotel</button>
        </form>
    );
};

export default UpdateHotelForm;
