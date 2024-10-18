// src/redux/accommodationsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const accommodationsSlice = createSlice({
  name: 'accommodations',
  initialState: {
    list: [], // Array to hold accommodation data
  },
  reducers: {
    addAccommodation: (state, action) => {
      state.list.push(action.payload); // Add a new accommodation
    },
    // You can add more reducers here if needed, like updateAccommodation or deleteAccommodation
  },
});

// Export actions for use in components
export const { addAccommodation } = accommodationsSlice.actions;

// Export the reducer to be included in the store
export default accommodationsSlice.reducer;
