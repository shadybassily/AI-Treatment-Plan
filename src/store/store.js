import { combineReducers, configureStore } from "@reduxjs/toolkit";
import planReducer from "./plansSLice";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  plan: planReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
