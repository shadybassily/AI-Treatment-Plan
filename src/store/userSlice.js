import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    isAuth: false,
    email: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSignIn: (state, action) => {
      state.user = { isAuth: true, email: action.payload };
    },
    userSignOut: state => {
      state.user = { isAuth: false, email: "" };
    },
  },
});

export const { userSignIn,userSignOut } = userSlice.actions;

export default userSlice.reducer;
