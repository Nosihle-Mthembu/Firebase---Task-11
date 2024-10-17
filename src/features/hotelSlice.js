// features/hotelSlice.js
import { createSlice } from '@reduxjs/toolkit';

const hotelSlice = createSlice({
  name: 'hotels',
  initialState: {
    list: [],
  },
  reducers: {
    addHotel: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addHotel } = hotelSlice.actions;
export default hotelSlice.reducer;
