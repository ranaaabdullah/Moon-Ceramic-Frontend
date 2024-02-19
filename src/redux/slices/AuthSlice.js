import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LoginUser: (state, action) => {
      console.log(action.payload, "AUTH SLICE:::::");
      state.user = action.payload;
    },
    Logout: (state) => {
      state.user = null;
    },
  },
});

export const { LoginUser, Logout } = AuthSlice.actions;

export const AuthReducer = AuthSlice.reducer;
