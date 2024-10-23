// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../features/registerSlice';
import hotelReducer from '../features/hotelSlice'; 

export const store = configureStore({
  reducer: {
    register: registerReducer,
    hotels: hotelReducer,
  },
});

