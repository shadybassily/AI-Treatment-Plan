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
    userLogin: (state, action) => {
      state.user = { isAuth: true, email: action.payload };
    },
    userLogout: state => {
      state.user = { isAuth: false, email: "" };
    },
  },
});

export const { userLogin,userLogout } = userSlice.actions;

export default userSlice.reducer;
