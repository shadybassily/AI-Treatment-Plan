import { createSelector, createSlice } from '@reduxjs/toolkit';

//selectors

const getPlan = createSelector(
   [
      // gettig all the plans
      (state) => state.plan.value,
      // passing the (id) of the required plan to get
      (state, id) => id,
   ],
   (plans, id) => {
      return plans.filter((plan) => plan.id == id);
   }
);

const initialState = {
   value: [],
   selectedPlan: null,
};

export const plansSlice = createSlice({
   name: 'plan',
   initialState,
   reducers: {
      savePlan: (state, action) => {
         state.value = [action.payload, ...state.value];
      },
      deletePlan: (state, action) => {
         state.value = state.value.filter((p) => p.id !== action.payload);
      },
      selectPlan: (state, action) => {
         state.selectedPlan = action.payload;
      },
   },
});

export { getPlan };

export const { savePlan, deletePlan, selectPlan } = plansSlice.actions;

export default plansSlice.reducer;
