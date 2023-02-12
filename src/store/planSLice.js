import { createSelector, createSlice } from '@reduxjs/toolkit';

// selectors
const getPlanById = createSelector(
   [
      // gettig all the plans
      (state) => state.plan.value,
      // passing the (id) of the required plan to get
      (state, id) => id,
   ],
   (plans, id) => {
      return plans.filter((plan) => plan.id == id)[0];
   }
);

const dummyPlan = {
   id: '',
   text: '',
   formData: {
      dentistEmail: '',
      dentistName: '',
      dentistRecommendation: '',
      discount: '',
      monthsWithZeroInterest: "",
      patientFeedback: '',
      patientName: '',
      treatmentCost: "",
      treatmentTime: '1 hour',
      comments:""
   },
};
const initialState = {
   value: [],
   selectedPlan: dummyPlan,
};

export const planSlice = createSlice({
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

export { getPlanById, dummyPlan };
export const { savePlan, deletePlan, selectPlan } = planSlice.actions;
export default planSlice.reducer;
