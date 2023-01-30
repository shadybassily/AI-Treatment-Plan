import { combineReducers, configureStore } from "@reduxjs/toolkit";
import planReducer from "./plansSLice"

const rootReducer = combineReducers({
  plan: planReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
