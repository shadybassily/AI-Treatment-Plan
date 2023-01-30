import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const plansSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    savePlan: (state, action) => {
      state.value = [action.payload, ...state.value];
    },
    deletePlan: (state, action) => {
      state.value = state.value.filter((p) => p.id !== action.payload);
    },
  },
});

export const { savePlan, deletePlan } = plansSlice.actions;

export default plansSlice.reducer;
