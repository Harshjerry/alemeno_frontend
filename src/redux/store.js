// src/redux/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import courseReducer from "./courseRedux"; // Import your CourseSlice
import likesReducer from './LikeRedux'; // Import the LikesSlice
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  enrollments: courseReducer, // Add the course reducer to the root reducer
  likes: likesReducer, // Add the likes reducer to the root reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
