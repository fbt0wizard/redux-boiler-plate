import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "../../Redux-toolkit-query/baseConfig";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import userSlice from "../slices/userSlice";

const persistConfig = {
  key: "root",
  storage,
};

// * The user slice have been persisted bellow ==> follow thesame process to persist any other slice
const persistedUser = persistReducer(persistConfig, userSlice);

export const store = configureStore({
  reducer: {
    user: persistedUser,
    // * Add all your other slices (state) you dont want to persist here
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) =>
    getDefault({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE],
      },
    }).concat(thunk, api.middleware),
});
setupListeners(store.dispatch);

export const persistor = persistStore(store);
