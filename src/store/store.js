import { combineReducers, configureStore } from '@reduxjs/toolkit';
import planReducer from './planSLice';
import userReducer from './userSlice';
//persist
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
const rootReducer = combineReducers({
   plan: planReducer,
   user: userReducer,
});
const persistConfig = {
   key: 'root',
   storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
   reducer: rootReducer,
   // middleware: (getDefaultMiddleware) =>
   //    getDefaultMiddleware({ serializableCheck: false })
});

// export const persistor = persistStore(store);
