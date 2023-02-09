import { combineReducers, configureStore } from '@reduxjs/toolkit';
import planReducer from './plansSLice';
import userReducer from './userSlice';
//persist
import logger from 'redux-logger';
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
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false })
});

export const persistor = persistStore(store);
