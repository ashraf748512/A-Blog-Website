import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
    updateUserProfile: (state, action) => {
      // Update only the fields that are present in the action.payload
      if (action.payload.name) state.userData.name = action.payload.name;
      if (action.payload.email) state.userData.email = action.payload.email;
    },
  },
});

export const { login, logout, updateUserProfile } = authSlice.actions;
export default authSlice.reducer;
