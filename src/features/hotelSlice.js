import { createSlice } from '@reduxjs/toolkit';

// Local storage helper functions with error handling
const saveHotelsToLocalStorage = (hotels) => {
  try {
    localStorage.setItem('hotels', JSON.stringify(hotels));
  } catch (error) {
    console.error("Could not save hotels to local storage:", error);
  }
};

const loadHotelsFromLocalStorage = () => {
  try {
    const storedHotels = localStorage.getItem('hotels');
    return storedHotels ? JSON.parse(storedHotels) : [];
  } catch (error) {
    console.error("Could not load hotels from local storage:", error);
    return [];
  }
};

const saveAdminToLocalStorage = (admin) => {
  try {
    localStorage.setItem('admin', JSON.stringify(admin));
  } catch (error) {
    console.error("Could not save admin to local storage:", error);
  }
};

const loadAdminFromLocalStorage = () => {
  try {
    const storedAdmin = localStorage.getItem('admin');
    return storedAdmin ? JSON.parse(storedAdmin) : {
      name: '',
      email: '',
      role: 'Administrator',
      imageUrl: '',
    };
  } catch (error) {
    console.error("Could not load admin from local storage:", error);
    return {
      name: '',
      email: '',
      role: 'Administrator',
      imageUrl: '',
    };
  }
};

const initialState = {
  list: loadHotelsFromLocalStorage(),
  admin: loadAdminFromLocalStorage(),
};

const hotelSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    addHotel: (state, action) => {
      const newHotel = {
        ...action.payload,
        id: Date.now() // Ensure a unique ID
      };
      state.list.push(newHotel);
      saveHotelsToLocalStorage(state.list);
    },

    deleteHotel: (state, action) => {
      state.list = state.list.filter((hotel) => hotel.id !== action.payload);
      saveHotelsToLocalStorage(state.list);
    },

    updateHotel: (state, action) => {
      const index = state.list.findIndex((hotel) => hotel.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = { ...state.list[index], ...action.payload };
        saveHotelsToLocalStorage(state.list); // Ensure updated list is saved to local storage
      }
    },

    setAdminProfile: (state, action) => {
      state.admin = { ...state.admin, ...action.payload };
      saveAdminToLocalStorage(state.admin);
    },

    deleteAdminProfile: (state) => {
      state.admin = {
        name: '',
        email: '',
        role: 'Administrator',
        imageUrl: '',
      };
      saveAdminToLocalStorage(state.admin);
    },
  },
});

export const { addHotel, deleteHotel, updateHotel, setAdminProfile, deleteAdminProfile } = hotelSlice.actions;
export default hotelSlice.reducer;
