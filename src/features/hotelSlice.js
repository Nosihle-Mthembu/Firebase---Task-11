import { createSlice } from '@reduxjs/toolkit';

// Helper functions to manage local storage for hotels and admin profile
const saveHotelsToLocalStorage = (hotels) => {
  localStorage.setItem('hotels', JSON.stringify(hotels));
};

const loadHotelsFromLocalStorage = () => {
  const storedHotels = localStorage.getItem('hotels');
  return storedHotels ? JSON.parse(storedHotels) : [];
};

const saveAdminToLocalStorage = (admin) => {
  localStorage.setItem('admin', JSON.stringify(admin));
};

const loadAdminFromLocalStorage = () => {
  const storedAdmin = localStorage.getItem('admin');
  return storedAdmin ? JSON.parse(storedAdmin) : {
    name: '',
    email: '',
    role: 'Administrator',
    imageUrl: '',
  };
};

const initialState = {
  list: loadHotelsFromLocalStorage(),
  admin: loadAdminFromLocalStorage(), // Load admin profile from local storage
};

const hotelSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    addHotel: (state, action) => {
      state.list.push(action.payload);
      saveHotelsToLocalStorage(state.list);
    },
    deleteHotel: (state, action) => {
      state.list = state.list.filter((hotel) => hotel.id !== action.payload);
      saveHotelsToLocalStorage(state.list);
    },
    updateHotel: (state, action) => {
      const { id, updatedData } = action.payload;
      const hotelIndex = state.list.findIndex((hotel) => hotel.id === id);
      if (hotelIndex !== -1) {
        state.list[hotelIndex] = { ...state.list[hotelIndex], ...updatedData };
        saveHotelsToLocalStorage(state.list);
      }
    },
    setAdminProfile: (state, action) => {
      state.admin = { ...state.admin, ...action.payload };
      saveAdminToLocalStorage(state.admin); // Save admin details to local storage
    },
    deleteAdminProfile: (state) => {
      state.admin = {
        name: '',
        email: '',
        role: 'Administrator',
        imageUrl: '',
      }; // Reset admin profile to initial state
      saveAdminToLocalStorage(state.admin); // Clear admin details from local storage
    },
  },
});

export const { addHotel, deleteHotel, updateHotel, setAdminProfile, deleteAdminProfile } = hotelSlice.actions;
export default hotelSlice.reducer;

