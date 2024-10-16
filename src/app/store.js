import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../features/registerSlice'; // Adjust the import path as necessary

export const store = configureStore({
  reducer: {
    register: registerReducer, // Add your register slice reducer here
  },
});


