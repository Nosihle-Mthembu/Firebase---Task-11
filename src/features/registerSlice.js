import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload; // Store user data on success
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload; // Store error message on failure
    },
  },
});

// Export actions for dispatch
export const { registerStart, registerSuccess, registerFail } = registerSlice.actions;
// Export the reducer to include in the store
export default registerSlice.reducer;
